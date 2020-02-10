# MMM-TextPerWeek
A [MagicMirror²](https://github.com/MichMich/MagicMirror) module that shows a different text (or image or anything really) each week.

Thanks to [eouia](https://github.com/eouia) for writing the actual code! My contribution was just to upload it here on GitHub in case anyone else finds it useful.

# Installation
1. Clone repo:
```
	cd MagicMirror/modules/
	git clone https://github.com/retroflex/MMM-TextPerWeek
```

2. Add the module to the ../MagicMirror/config/config.js.

# Examples
Example showing a letter each week, starting at week 7. For weeks other that 7-10, nothing ('') is shown.
```
{
  module: 'MMM-TextPerWeek',
  position: 'bottom_right',
  header: 'Letter of the Week',
  config: {
    texts: {
      'default': '',
      7: 'A',
      8: 'B',
      9: 'C',
      10: 'D'
    }
  }
}
