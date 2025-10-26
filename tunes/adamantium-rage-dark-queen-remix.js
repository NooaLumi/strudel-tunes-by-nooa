/* 
    Remix of "Dark Queen" from the Adamantium Rage OST by Dylan Beale (remix by @NooaLumi)
    Original song is available on Bandcamp: https://sneakersocialclub.bandcamp.com/album/adamantium-rage-ost
*/

setcpm(260)

const BRUSH = s("hh:10").bank("RolandTR909")
.gain(0.06).attack(0.03).sustain(0.5).release(0)

const FOGHORN = s("<[- gm_fx_soundtrack:4] ->/4")
.early(2).gain(1).orbit(3).detune(1).fm("1").fmh(2).room(1).roomsize(2)
.attack(0.8).release(1).decay(0.4).note("<E1 G1>/8")

const BLINKER = note("E6").s("sine")
.gain(sine.range(0.03, 0.11).slow(16))
.legato(0.2).room(0.5).roomsize(1).release(0.15)

const BLINKER_CHORUS = note("<E6 F6 G6 A6 G6 F6 G6 A6>").s("sine")
.gain(0.11).legato(0.2).room(0.5).roomsize(1).release(0.15)

const SNARE_DRUM = sound("<sd>/4").bank("RolandTR909").n("1")
.gain(0.7).decay(0.5).release(0.5).freq(60).late(2).orbit(4).room(1).roomsize(0.8)
.crush(8).lpf(2500).delay("0.2:0.09:0.3")

const INTRO_DRUMS = stack(
  arrange(
    [8, "<[bd -] bd - bd bd - - [bd -]>"],
    [8, "<[bd -] bd - [bd -] [bd -] [bd bd] - bd>"],
    [16, "<[bd -] bd - [bd -] bd - - [bd -] bd - - bd - bd - ->"],
  ).sound().bank("RolandTR909").n("4")
  .gain(0.2)
  .decay(0.1).sustain(0.2).release(0.1)
  .orbit(5).room(0.3).roomsize(0.8),
  arrange(
    [8, "<[- hh] - hh - - - hh [hh*2]>"],
    [8, "<[- hh] - hh [- hh] [- hh] - hh ->"],
    [16, "<[- hh] - hh [- hh] - hh hh [- hh] - hh hh - [hh*2] - hh ->"],
  ).sound().bank("RolandTR909").n("2")
  .compressor("<-5!24 -10!4 -15!4>:20:10:.002:.02").gain(sine.rangex(0.18, 0.15).slow(32))
  .orbit(7).room(0.22).roomsize(0.8).delay("0.2:0.7:0.2"),
  SNARE_DRUM.mask("<0!30 1!2>") // only play on last beat
)

const BASS = note("<E1 D1 - C1 -!4>").s("<lt lt - lt -!4>").bank("RolandTR909").n("<3 3 - 3 -!4>")
.orbit(10).room(0.3).roomsize(0.8).gain(0.5).attack(0.05)

const CHOIR = note("<-!4 B2 C3 D3@2 -!4 D3 E3 F3@2>").sound("gm_choir_aahs:9")
.gain(1).decay(0.5).crush(8).early(0.2)

const RIFF_DRUMS = s("<bd -!4 <bd*2 bd> - <bd ->>")
.bank("RolandTR909").n("4")
.gain(0.2).decay(0.1).sustain(0.2).release(0.1).orbit(5).room(0.3).roomsize(0.8)

$:arrange(
  [32, "-"],
  [32, INTRO_DRUMS],
  [32, stack(SNARE_DRUM, BASS, RIFF_DRUMS)],
  [64, stack(SNARE_DRUM, BASS, RIFF_DRUMS, CHOIR)],
  [32, stack(SNARE_DRUM, BASS, RIFF_DRUMS)],
)._punchcard()
$:arrange(
  [128, stack(BLINKER, BRUSH, FOGHORN)],
  [32, stack(BLINKER_CHORUS, BRUSH, FOGHORN)],
  [16, stack(BLINKER_CHORUS.fast(2), BRUSH, FOGHORN)],
  [16, stack(BLINKER_CHORUS, BRUSH, FOGHORN)],
)._scope()
.theme("<strudelTheme archBtw>/8")