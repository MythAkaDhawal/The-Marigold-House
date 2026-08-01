'use client';

import React, { createContext, useContext, useState, useEffect, useRef, ReactNode } from 'react';

export type VolumeLevel = 'soft' | 'medium' | 'full';

interface AudioContextType {
  isPlaying: boolean;
  volumeLevel: VolumeLevel;
  togglePlay: () => void;
  setVolumeLevel: (level: VolumeLevel) => void;
  playInteractionSound: (type: 'rustle' | 'chime' | 'stamp') => void;
}

const VOLUME_MAP: Record<VolumeLevel, number> = {
  soft: 0.25,
  medium: 0.55,
  full: 0.9,
};

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioProvider = ({ children }: { children: ReactNode }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [volumeLevel, setVolumeLevelState] = useState<VolumeLevel>('medium');
  const audioCtxRef = useRef<AudioContext | null>(null);
  const masterGainRef = useRef<GainNode | null>(null);
  const synthOscillatorsRef = useRef<OscillatorNode[]>([]);

  // Initialize Web Audio Context on demand
  const initAudioCtx = () => {
    if (audioCtxRef.current) return audioCtxRef.current;

    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return null;

    const ctx = new AudioContextClass();
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0, ctx.currentTime);
    gain.connect(ctx.destination);

    audioCtxRef.current = ctx;
    masterGainRef.current = gain;
    return ctx;
  };

  // Ambient synth music generator (warm acoustic chord progression: F#m, C#m, Bm, D)
  const startAmbientSynth = () => {
    const ctx = initAudioCtx();
    if (!ctx || !masterGainRef.current) return;

    if (ctx.state === 'suspended') {
      ctx.resume();
    }

    // Stop existing synth oscillators if any
    stopAmbientSynth();

    // Pentatonic ambient chord frequencies (Hz) simulating warm acoustic guitar / harmonium tones
    const chordFrequencies = [
      [220, 277.18, 329.63, 440], // A Major 7th harmony
      [196, 246.94, 293.66, 392], // G Major 7th
      [164.81, 207.65, 246.94, 329.63], // E minor 7th
      [174.61, 220, 261.63, 349.23], // F Major 7th
    ];

    let chordIndex = 0;

    const playChord = () => {
      if (!audioCtxRef.current || !masterGainRef.current || !isPlaying) return;
      const freqs = chordFrequencies[chordIndex];
      chordIndex = (chordIndex + 1) % chordFrequencies.length;

      freqs.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const oscGain = ctx.createGain();

        // Warm sine + soft triangle blend
        osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        // Soft attack & slow decay
        oscGain.gain.setValueAtTime(0.001, ctx.currentTime);
        oscGain.gain.exponentialRampToValueAtTime(0.08 / (idx + 1), ctx.currentTime + 1.2);
        oscGain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 4.5);

        osc.connect(oscGain);
        oscGain.connect(masterGainRef.current!);

        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 4.8);
        synthOscillatorsRef.current.push(osc);
      });
    };

    playChord();
    const interval = setInterval(() => {
      if (isPlaying) {
        playChord();
      } else {
        clearInterval(interval);
      }
    }, 4500);

    return () => clearInterval(interval);
  };

  const stopAmbientSynth = () => {
    synthOscillatorsRef.current.forEach((osc) => {
      try {
        osc.stop();
        osc.disconnect();
      } catch {
        // Ignore
      }
    });
    synthOscillatorsRef.current = [];
  };

  // Fade in / fade out audio
  useEffect(() => {
    if (!audioCtxRef.current || !masterGainRef.current) return;
    const ctx = audioCtxRef.current;
    const gainNode = masterGainRef.current;
    const targetVolume = VOLUME_MAP[volumeLevel];

    if (isPlaying) {
      startAmbientSynth();
      gainNode.gain.cancelScheduledValues(ctx.currentTime);
      gainNode.gain.setValueAtTime(gainNode.gain.value, ctx.currentTime);
      gainNode.gain.linearRampToValueAtTime(targetVolume, ctx.currentTime + 2.5); // 2.5s fade in
    } else {
      gainNode.gain.cancelScheduledValues(ctx.currentTime);
      gainNode.gain.setValueAtTime(gainNode.gain.value, ctx.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.0001, ctx.currentTime + 1.8); // 1.8s fade out
      setTimeout(() => stopAmbientSynth(), 1800);
    }
  }, [isPlaying, volumeLevel]);

  const togglePlay = () => {
    initAudioCtx();
    setIsPlaying((prev) => !prev);
  };

  const setVolumeLevel = (level: VolumeLevel) => {
    setVolumeLevelState(level);
    if (masterGainRef.current && audioCtxRef.current) {
      const ctx = audioCtxRef.current;
      masterGainRef.current.gain.cancelScheduledValues(ctx.currentTime);
      masterGainRef.current.gain.linearRampToValueAtTime(
        VOLUME_MAP[level],
        ctx.currentTime + 0.3
      );
    }
  };

  const playInteractionSound = (type: 'rustle' | 'chime' | 'stamp') => {
    const ctx = initAudioCtx();
    if (!ctx || ctx.state === 'suspended') return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    if (type === 'rustle') {
      // Soft paper rustle simulation using filtered noise/soft tone
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(140, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(60, ctx.currentTime + 0.2);
      gain.gain.setValueAtTime(0.05, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.001, ctx.currentTime + 0.2);
    } else if (type === 'chime') {
      // Soft crystalline chime
      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1760, ctx.currentTime + 0.4);
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.6);
    } else if (type === 'stamp') {
      // Warm wax stamp click
      osc.type = 'sine';
      osc.frequency.setValueAtTime(180, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(80, ctx.currentTime + 0.15);
      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.001, ctx.currentTime + 0.15);
    }

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.6);
  };

  return (
    <AudioContext.Provider
      value={{
        isPlaying,
        volumeLevel,
        togglePlay,
        setVolumeLevel,
        playInteractionSound,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
};
