IOT Font ICONS
=====================

```
	Build Vue ICON Fonts Components from Sktech in the fly targets IOT development.
```

### Build Web Font ICON
```

gulp slice-symbols;

// after build finished check folder inside dist

```

### build Vue Components 

```
npm run prepublish
// this will be a js file `vue-icon-fonts.js` generated.
```

### Customize

#### Generate Web Fonts

* add your own sketch file to `assets\sketch`
* make slice of every svg icon in one artboard  
	```
	run `gulp slice-symbols;` to generate web fonts
	```
* OR one artboard for one svg
	```
	run `gulp symbols;` to generate web fonts
	```

#### Generate Vue Components
* Follow the setps of `Generate Web Fonts`
* Run `npm run build` to generate vue components 


### TODO
* Support generate individual SVG and Vue Components from font-awsome

## Inspired by

* [vue-awesome](https://github.com/Justineo/vue-awesome)
* [symbols-for-sketch](https://github.com/cognitom/symbols-for-sketch)
* [gulp-sketch](https://github.com/cognitom/gulp-sketch)
* [Font-Awesome-SVG-PNG](https://github.com/encharm/Font-Awesome-SVG-PNG)