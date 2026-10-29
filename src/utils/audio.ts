/**
 * Period Sound Effects & 1940s Vintage Radio Jazz Synthesizer
 * Uses Web Audio API to produce authentic 1945 mechanical typewriter clicks,
 * rubber desk stamps, urgent teletypes, and warm 1940s radio jazz with light tube static.
 */

class SoundSynthesizer {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;

  // Radio jazz state
  private isRadioPlaying: boolean = false;
  private radioMasterGain: GainNode | null = null;
  private radioStaticSource: AudioBufferSourceNode | null = null;
  private radioInterval: number | null = null;
  private activeJazzOscillators: OscillatorNode[] = [];

  private initCtx() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
  }

  public setMuted(muted: boolean) {
    this.isMuted = muted;
    if (this.radioMasterGain && this.ctx) {
      if (muted) {
        this.radioMasterGain.gain.setValueAtTime(0, this.ctx.currentTime);
      } else if (this.isRadioPlaying) {
        this.radioMasterGain.gain.setValueAtTime(0.22, this.ctx.currentTime);
      }
    }
  }

  public getMuted(): boolean {
    return this.isMuted;
  }

  /**
   * Vintage mechanical typewriter key click
   */
  public playTypewriter() {
    if (this.isMuted) return;
    try {
      this.initCtx();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(2400 + Math.random() * 400, now);
      filter.Q.setValueAtTime(4, now);

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(600 + Math.random() * 150, now);
      osc.frequency.exponentialRampToValueAtTime(120, now + 0.04);

      gain.gain.setValueAtTime(0.25, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.05);
    } catch {
      // AudioContext failure gracefully ignored
    }
  }

  /**
   * Heavy rubber desk stamp thud
   */
  public playStamp() {
    if (this.isMuted) return;
    try {
      this.initCtx();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(140, now);
      osc.frequency.exponentialRampToValueAtTime(35, now + 0.15);

      gain.gain.setValueAtTime(0.6, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.2);
    } catch {
      // AudioContext failure gracefully ignored
    }
  }

  /**
   * Urgent military wire teletype chatter (3 rapid beeps)
   */
  public playTeletype() {
    if (this.isMuted) return;
    try {
      this.initCtx();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const beeps = [0, 0.07, 0.14];
      beeps.forEach((delay, idx) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'square';
        osc.frequency.setValueAtTime(idx % 2 === 0 ? 880 : 960, now + delay);

        gain.gain.setValueAtTime(0.12, now + delay);
        gain.gain.exponentialRampToValueAtTime(0.001, now + delay + 0.04);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now + delay);
        osc.stop(now + delay + 0.05);
      });
    } catch {
      // AudioContext failure gracefully ignored
    }
  }

  /**
   * Retro radar dial click
   */
  public playDial() {
    if (this.isMuted) return;
    try {
      this.initCtx();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(1200, now);
      osc.frequency.exponentialRampToValueAtTime(400, now + 0.03);

      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.03);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.035);
    } catch {
      // AudioContext failure gracefully ignored
    }
  }

  /**
   * Emergency alert klaxon for critical warnings or 0% collapse
   */
  public playEmergencyAlarm() {
    if (this.isMuted) return;
    try {
      this.initCtx();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.linearRampToValueAtTime(480, now + 0.2);
      osc.frequency.linearRampToValueAtTime(320, now + 0.4);

      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.45);
    } catch {
      // AudioContext failure gracefully ignored
    }
  }

  /**
   * 1940s Vintage Radio Soft Jazz with Light Static
   * Synthesizes warm AM radio filters, mellow swing chords, and authentic tube static
   */
  public start1940sRadioJazz() {
    try {
      this.initCtx();
      if (!this.ctx) return;

      // If already playing, return
      if (this.isRadioPlaying) return;
      this.isRadioPlaying = true;

      const ctx = this.ctx;
      const now = ctx.currentTime;

      // 1. Radio Master Channel with AM Bandpass (350Hz - 3200Hz)
      const master = ctx.createGain();
      master.gain.setValueAtTime(this.isMuted ? 0 : 0.01, now);
      if (!this.isMuted) {
        master.gain.exponentialRampToValueAtTime(0.22, now + 0.8);
      }

      const highPass = ctx.createBiquadFilter();
      highPass.type = 'highpass';
      highPass.frequency.setValueAtTime(320, now);

      const lowPass = ctx.createBiquadFilter();
      lowPass.type = 'lowpass';
      lowPass.frequency.setValueAtTime(3100, now);

      master.connect(highPass);
      highPass.connect(lowPass);
      lowPass.connect(ctx.destination);
      this.radioMasterGain = master;

      // 2. Light Analog Radio Static & Crackle
      const bufferSize = ctx.sampleRate * 2;
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        // Very soft white/pink noise + occasional vinyl/tube crackle spike
        const crackle = Math.random() < 0.004 ? (Math.random() * 0.4 - 0.2) : 0;
        output[i] = (Math.random() * 0.06 - 0.03) + crackle;
      }

      const staticSource = ctx.createBufferSource();
      staticSource.buffer = noiseBuffer;
      staticSource.loop = true;

      const staticFilter = ctx.createBiquadFilter();
      staticFilter.type = 'bandpass';
      staticFilter.frequency.setValueAtTime(1400, now);
      staticFilter.Q.setValueAtTime(1.5, now);

      const staticGain = ctx.createGain();
      staticGain.gain.setValueAtTime(0.04, now);

      staticSource.connect(staticFilter);
      staticFilter.connect(staticGain);
      staticGain.connect(master);
      staticSource.start(now);
      this.radioStaticSource = staticSource;

      // 3. 1940s Jazz Swing Chords Progression
      // Fmaj9 -> Dm9 -> Gm7 -> C13 (Warm vintage harmony)
      const jazzChords = [
        {
          bass: 87.31, // F2
          chords: [174.61, 220.0, 261.63, 329.63, 392.0], // F3, A3, C4, E4, G4
          melody: 349.23, // F4
        },
        {
          bass: 73.42, // D2
          chords: [146.83, 174.61, 220.0, 261.63, 329.63], // D3, F3, A3, C4, E4
          melody: 293.66, // D4
        },
        {
          bass: 98.0, // G2
          chords: [196.0, 233.08, 293.66, 349.23], // G3, Bb3, D4, F4
          melody: 392.0, // G4
        },
        {
          bass: 65.41, // C2
          chords: [130.81, 164.81, 233.08, 293.66, 329.63], // C3, E3, Bb3, D4, E4
          melody: 261.63, // C4
        },
      ];

      let chordIndex = 0;

      const playNextChord = () => {
        if (!this.isRadioPlaying || !this.ctx || !this.radioMasterGain) return;

        const cNow = this.ctx.currentTime;
        const currentChord = jazzChords[chordIndex % jazzChords.length];
        chordIndex++;

        const chordDuration = 3.2; // seconds per chord

        // Bass Note (soft triangle with subtle warmth)
        const bassOsc = this.ctx.createOscillator();
        const bassGain = this.ctx.createGain();
        bassOsc.type = 'triangle';
        bassOsc.frequency.setValueAtTime(currentChord.bass, cNow);

        bassGain.gain.setValueAtTime(0.001, cNow);
        bassGain.gain.linearRampToValueAtTime(0.12, cNow + 0.15);
        bassGain.gain.exponentialRampToValueAtTime(0.001, cNow + chordDuration - 0.1);

        bassOsc.connect(bassGain);
        bassGain.connect(this.radioMasterGain);
        bassOsc.start(cNow);
        bassOsc.stop(cNow + chordDuration);
        this.activeJazzOscillators.push(bassOsc);

        // Harmony Notes (Muted, mellow sine-triangle mix)
        currentChord.chords.forEach((freq, idx) => {
          if (!this.ctx || !this.radioMasterGain) return;
          const osc = this.ctx.createOscillator();
          const noteGain = this.ctx.createGain();

          osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
          osc.frequency.setValueAtTime(freq, cNow);

          // Subtle natural detune
          osc.detune.setValueAtTime((Math.random() - 0.5) * 8, cNow);

          const peakGain = 0.035 / (idx + 1);
          noteGain.gain.setValueAtTime(0.001, cNow);
          noteGain.gain.linearRampToValueAtTime(peakGain, cNow + 0.4);
          noteGain.gain.exponentialRampToValueAtTime(0.001, cNow + chordDuration - 0.05);

          osc.connect(noteGain);
          noteGain.connect(this.radioMasterGain);
          osc.start(cNow);
          osc.stop(cNow + chordDuration);
          this.activeJazzOscillators.push(osc);
        });

        // Soft Lead Melody Note with subtle vintage vibrato
        const leadOsc = this.ctx.createOscillator();
        const leadGain = this.ctx.createGain();
        const vibrato = this.ctx.createOscillator();
        const vibratoGain = this.ctx.createGain();

        leadOsc.type = 'sine';
        leadOsc.frequency.setValueAtTime(currentChord.melody, cNow + 0.3);

        // 4.8 Hz radio vibrato
        vibrato.frequency.setValueAtTime(4.8, cNow);
        vibratoGain.gain.setValueAtTime(4.5, cNow);
        vibrato.connect(leadOsc.frequency);

        leadGain.gain.setValueAtTime(0.001, cNow + 0.3);
        leadGain.gain.linearRampToValueAtTime(0.045, cNow + 0.6);
        leadGain.gain.exponentialRampToValueAtTime(0.001, cNow + chordDuration - 0.2);

        leadOsc.connect(leadGain);
        leadGain.connect(this.radioMasterGain);

        vibrato.start(cNow + 0.3);
        leadOsc.start(cNow + 0.3);
        vibrato.stop(cNow + chordDuration);
        leadOsc.stop(cNow + chordDuration);
        this.activeJazzOscillators.push(leadOsc);
      };

      // Play immediately, then loop every 3 seconds
      playNextChord();
      this.radioInterval = window.setInterval(playNextChord, 3000);
    } catch {
      // Audio failure handled gracefully
    }
  }

  /**
   * Stop the 1940s Radio Jazz smoothly
   */
  public stop1940sRadioJazz() {
    try {
      this.isRadioPlaying = false;

      if (this.radioInterval !== null) {
        clearInterval(this.radioInterval);
        this.radioInterval = null;
      }

      if (this.radioMasterGain && this.ctx) {
        const now = this.ctx.currentTime;
        this.radioMasterGain.gain.linearRampToValueAtTime(0.001, now + 0.35);
        setTimeout(() => {
          if (this.radioStaticSource) {
            try {
              this.radioStaticSource.stop();
              this.radioStaticSource.disconnect();
            } catch {}
            this.radioStaticSource = null;
          }
          this.activeJazzOscillators.forEach((osc) => {
            try {
              osc.stop();
              osc.disconnect();
            } catch {}
          });
          this.activeJazzOscillators = [];
          if (this.radioMasterGain) {
            this.radioMasterGain.disconnect();
            this.radioMasterGain = null;
          }
        }, 400);
      }
    } catch {
      // Cleanup handled gracefully
    }
  }
}

export const soundFx = new SoundSynthesizer();
