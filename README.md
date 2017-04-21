cloudtea-iot-fonticon
=====================

```
	Build Vue ICON Fonts Components from Sktech in the fly.
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
* add your own sketch file to `assets\sketch`
* make slice of every svg icon
* run `gulp slice-symbols;` to generate web fonts 
* or run `npm run prepublish` to generate vue components 

## Inspired by

* [vue-awesome](https://github.com/Justineo/vue-awesome)
* [symbols-for-sketch](https://github.com/cognitom/symbols-for-sketch)
* [gulp-sketch](https://github.com/cognitom/gulp-sketch)