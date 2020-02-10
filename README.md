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

![screenshot](https://user-images.githubusercontent.com/25268023/74150499-50f77500-4c0a-11ea-856f-99b35e621e90.png)
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
```

<br />
Example with images and text for a few weeks and a default text for other weeks.

<br />

![screenshot](https://user-images.githubusercontent.com/25268023/74151487-93ba4c80-4c0c-11ea-951d-d1a747c10f4d.png)
```
{
	module: 'MMM-TextPerWeek',
	position: 'bottom_right',
	header: 'Animal of the Week',
	config: {
		texts: {
			'default': 'No animal this week',
			7: '<img src="https://img.icons8.com/color/48/000000/budgie.png" /><br />Budgie',
			14: '<img src="https://img.icons8.com/color/48/000000/unicorn.png" /><br />Unicorn',
			18: '<img src="https://img.icons8.com/color/48/000000/bee.png" /><br />Bee'
		}
	}
},
```
