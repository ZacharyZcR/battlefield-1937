import type { WeaponKind } from './loadouts'

type AmbientGain = GainNode & { baseVolume: number }

export class BattlefieldAudio {
  private context?: AudioContext
  private noiseBuffer?: AudioBuffer
  private volume = 1
  private engineOscillator?: OscillatorNode
  private engineGain?: GainNode
  private engineFilter?: BiquadFilterNode
  private ambientStarted = false
  private ambientGains: AmbientGain[] = []

  setVolume(value: number) { this.volume = Math.max(0, Math.min(1, value)); for (const gain of this.ambientGains) gain.gain.setTargetAtTime(gain.baseVolume * this.volume, gain.context.currentTime, .08) }

  unlock(options?: { rain?: boolean; birds?: boolean }) {
    this.context ??= new AudioContext()
    if (this.context.state === 'suspended') void this.context.resume()
    if (!this.ambientStarted) this.startAmbient(Boolean(options?.rain), options?.birds !== false)
  }

  private ambientGain(base: number) {
    const gain = this.context!.createGain() as AmbientGain; gain.baseVolume = base; gain.gain.value = base * this.volume; this.ambientGains.push(gain); return gain
  }

  private startAmbient(rain: boolean, birds: boolean) {
    const context = this.context!; this.ambientStarted = true
    if (!this.noiseBuffer) { const length = context.sampleRate; this.noiseBuffer = context.createBuffer(1, length, context.sampleRate); const data = this.noiseBuffer.getChannelData(0); for (let index = 0; index < length; index++) data[index] = Math.random() * 2 - 1 }
    const wind = context.createBufferSource(), windFilter = context.createBiquadFilter(), windGain = this.ambientGain(.026); wind.buffer = this.noiseBuffer; wind.loop = true; windFilter.type = 'lowpass'; windFilter.frequency.value = 260; wind.connect(windFilter).connect(windGain).connect(context.destination); wind.start()
    const lfo = context.createOscillator(), lfoGain = context.createGain(); lfo.frequency.value = .13; lfoGain.gain.value = 85; lfo.connect(lfoGain).connect(windFilter.frequency); lfo.start()
    if (rain) { const source = context.createBufferSource(), filter = context.createBiquadFilter(), gain = this.ambientGain(.035); source.buffer = this.noiseBuffer; source.loop = true; filter.type = 'bandpass'; filter.frequency.value = 1450; filter.Q.value = .35; source.connect(filter).connect(gain).connect(context.destination); source.start() }
    const distantLoop = () => { if (Math.random() < .5) this.distantMachineGun(); setTimeout(distantLoop, 3800 + Math.random() * 2200) }
    const birdLoop = () => { if (birds && Math.random() < .55) this.bird(); setTimeout(birdLoop, 1900 + Math.random() * 1800) }
    setTimeout(distantLoop, 2400); setTimeout(birdLoop, 1200)
  }

  private distantMachineGun() {
    const context = this.context; if (!context || context.state !== 'running') return
    const count = 5 + Math.floor(Math.random() * 9), gap = .07 + Math.random() * .04, frequency = 400 + Math.random() * 300, volume = (.012 + Math.random() * .022) * this.volume, panner = context.createStereoPanner(), filter = context.createBiquadFilter(); panner.pan.value = (Math.random() - .5) * 1.6; filter.type = 'lowpass'; filter.frequency.value = 900; filter.connect(panner).connect(context.destination)
    for (let index = 0; index < count; index++) { const at = context.currentTime + index * gap, oscillator = context.createOscillator(), gain = context.createGain(); oscillator.type = 'triangle'; oscillator.frequency.value = frequency * (.9 + Math.random() * .2); gain.gain.setValueAtTime(.0001, at); gain.gain.linearRampToValueAtTime(volume, at + .006); gain.gain.exponentialRampToValueAtTime(.0001, at + .05); oscillator.connect(gain).connect(filter); oscillator.start(at); oscillator.stop(at + .08) }
  }

  private bird() {
    const context = this.context; if (!context || context.state !== 'running') return
    const oscillator = context.createOscillator(), gain = context.createGain(), panner = context.createStereoPanner(), count = 2 + Math.floor(Math.random() * 4); panner.pan.value = (Math.random() - .5) * 1.7; oscillator.connect(gain).connect(panner).connect(context.destination); gain.gain.value = .0001; let at = context.currentTime + .03
    for (let index = 0; index < count; index++) { const frequency = 2300 + Math.random() * 1500; oscillator.frequency.setValueAtTime(frequency, at); oscillator.frequency.exponentialRampToValueAtTime(frequency * (1.12 + Math.random() * .25), at + .06); gain.gain.setValueAtTime(.0001, at); gain.gain.linearRampToValueAtTime((.006 + Math.random() * .012) * this.volume, at + .018); gain.gain.exponentialRampToValueAtTime(.0001, at + .13); at += .12 + Math.random() * .16 }
    oscillator.start(); oscillator.stop(at + .2)
  }

  shot(kind: WeaponKind, volume = 1, pan = 0) {
    volume *= this.volume
    const context = this.context
    if (!context || context.state !== 'running') return
    const duration = kind === 'auto' ? .09 : .16
    this.noise(duration, kind === 'auto' ? 1500 : 1050, .25 * volume, pan)
    const oscillator = context.createOscillator(), gain = context.createGain(), panner = context.createStereoPanner()
    oscillator.type = 'square'; oscillator.frequency.setValueAtTime(kind === 'auto' ? 130 : 92, context.currentTime); oscillator.frequency.exponentialRampToValueAtTime(42, context.currentTime + duration)
    gain.gain.setValueAtTime(.18 * volume, context.currentTime); gain.gain.exponentialRampToValueAtTime(.001, context.currentTime + duration); panner.pan.value = pan
    oscillator.connect(gain).connect(panner).connect(context.destination); oscillator.start(); oscillator.stop(context.currentTime + duration)
  }

  explosion(volume = 1, pan = 0) {
    volume *= this.volume
    const context = this.context
    if (!context || context.state !== 'running') return
    this.noise(.65, 520, .6 * volume, pan)
    const oscillator = context.createOscillator(), gain = context.createGain(), panner = context.createStereoPanner()
    oscillator.type = 'sine'; oscillator.frequency.setValueAtTime(78, context.currentTime); oscillator.frequency.exponentialRampToValueAtTime(28, context.currentTime + .55); gain.gain.setValueAtTime(.5 * volume, context.currentTime); gain.gain.exponentialRampToValueAtTime(.001, context.currentTime + .65); panner.pan.value = pan
    oscillator.connect(gain).connect(panner).connect(context.destination); oscillator.start(); oscillator.stop(context.currentTime + .7)
  }

  click(frequency = 850, volume = .08) {
    volume *= this.volume
    const context = this.context
    if (!context || context.state !== 'running') return
    const oscillator = context.createOscillator(), gain = context.createGain(); oscillator.type = 'triangle'; oscillator.frequency.setValueAtTime(frequency, context.currentTime); gain.gain.setValueAtTime(volume, context.currentTime); gain.gain.exponentialRampToValueAtTime(.001, context.currentTime + .07); oscillator.connect(gain).connect(context.destination); oscillator.start(); oscillator.stop(context.currentTime + .08)
  }

  whizz(pan = 0) {
    const context = this.context
    if (!context || context.state !== 'running') return
    const volume = this.volume
    this.noise(.16, 5200, .16 * volume, pan)
    const oscillator = context.createOscillator(), gain = context.createGain(), panner = context.createStereoPanner()
    oscillator.type = 'sine'; oscillator.frequency.setValueAtTime(2600, context.currentTime); oscillator.frequency.exponentialRampToValueAtTime(780, context.currentTime + .14); gain.gain.setValueAtTime(.09 * volume, context.currentTime); gain.gain.exponentialRampToValueAtTime(.001, context.currentTime + .16); panner.pan.value = pan
    oscillator.connect(gain).connect(panner).connect(context.destination); oscillator.start(); oscillator.stop(context.currentTime + .17)
  }

  ricochet(volume = 1, pan = 0) {
    volume *= this.volume
    const context = this.context
    if (!context || context.state !== 'running') return
    const oscillator = context.createOscillator(), gain = context.createGain(), panner = context.createStereoPanner()
    oscillator.type = 'triangle'; oscillator.frequency.setValueAtTime(1700 + Math.random() * 900, context.currentTime); oscillator.frequency.exponentialRampToValueAtTime(420, context.currentTime + .13); gain.gain.setValueAtTime(.11 * volume, context.currentTime); gain.gain.exponentialRampToValueAtTime(.001, context.currentTime + .15); panner.pan.value = pan
    oscillator.connect(gain).connect(panner).connect(context.destination); oscillator.start(); oscillator.stop(context.currentTime + .16)
  }

  footstep(running = false, strength = 1) {
    const context = this.context
    if (!context || context.state !== 'running') return
    const volume = this.volume * strength
    this.noise(running ? .085 : .07, running ? 620 : 480, (running ? .075 : .05) * volume, (Math.random() - .5) * .12)
    const oscillator = context.createOscillator(), gain = context.createGain()
    oscillator.type = 'sine'; oscillator.frequency.setValueAtTime(running ? 82 : 68, context.currentTime); oscillator.frequency.exponentialRampToValueAtTime(38, context.currentTime + .075)
    gain.gain.setValueAtTime((running ? .045 : .028) * volume, context.currentTime); gain.gain.exponentialRampToValueAtTime(.001, context.currentTime + .09)
    oscillator.connect(gain).connect(context.destination); oscillator.start(); oscillator.stop(context.currentTime + .1)
  }

  hurt(strength = 1) {
    const context = this.context; if (!context || context.state !== 'running') return
    this.noise(.16, 760, .11 * this.volume * strength, 0)
    const oscillator = context.createOscillator(), gain = context.createGain(); oscillator.type = 'sine'; oscillator.frequency.setValueAtTime(145, context.currentTime); oscillator.frequency.exponentialRampToValueAtTime(62, context.currentTime + .14); gain.gain.setValueAtTime(.09 * this.volume * strength, context.currentTime); gain.gain.exponentialRampToValueAtTime(.001, context.currentTime + .18); oscillator.connect(gain).connect(context.destination); oscillator.start(); oscillator.stop(context.currentTime + .2)
  }

  engine(load: number, damage: number) {
    const context = this.context
    if (!context || context.state !== 'running') return
    if (!this.engineOscillator || !this.engineGain || !this.engineFilter) {
      this.engineOscillator = context.createOscillator(); this.engineGain = context.createGain(); this.engineFilter = context.createBiquadFilter(); this.engineOscillator.type = 'sawtooth'; this.engineFilter.type = 'lowpass'; this.engineGain.gain.value = .001; this.engineOscillator.connect(this.engineFilter).connect(this.engineGain).connect(context.destination); this.engineOscillator.start()
    }
    const now = context.currentTime, strain = Math.max(load, damage * .55); this.engineOscillator.frequency.setTargetAtTime(42 + strain * 48 - damage * 8, now, .08); this.engineFilter.frequency.setTargetAtTime(160 + load * 240 - damage * 65, now, .1); this.engineGain.gain.setTargetAtTime((.022 + load * .025 + damage * .012) * this.volume, now, .08)
  }

  stopEngine() {
    const context = this.context, gain = this.engineGain
    if (!context || !gain) return
    gain.gain.setTargetAtTime(.001, context.currentTime, .1)
  }

  private noise(duration: number, cutoff: number, volume: number, pan: number) {
    const context = this.context!
    if (!this.noiseBuffer) { const length = context.sampleRate; this.noiseBuffer = context.createBuffer(1, length, context.sampleRate); const data = this.noiseBuffer.getChannelData(0); for (let i = 0; i < length; i++) data[i] = Math.random() * 2 - 1 }
    const source = context.createBufferSource(), filter = context.createBiquadFilter(), gain = context.createGain(), panner = context.createStereoPanner(); source.buffer = this.noiseBuffer; filter.type = 'lowpass'; filter.frequency.value = cutoff; gain.gain.setValueAtTime(volume, context.currentTime); gain.gain.exponentialRampToValueAtTime(.001, context.currentTime + duration); panner.pan.value = pan; source.connect(filter).connect(gain).connect(panner).connect(context.destination); source.start(); source.stop(context.currentTime + duration)
  }
}
