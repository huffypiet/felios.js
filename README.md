
# Felios.js - Stateful Retro-Native UI

An experimental open-source tiny, light weight HTML5 library for state management & igniting magic on the UI within the browser.



<div style="background: white !important; display:block; height:400px;mind-height: 100%; width: auto; padding:4em; padding-bottom: 12em; margin-top:50px; border-radius: 2em">



</div>
![](/demo/assets/media/iphone-12-pro.gif)


**[Live Demo](https://huffypiet.github.io/felios.js/demo/)**  |  **[Source Code](https://github.com/huffypiet/felios.js)**

### Usage

- Meant as a plugin, that you may adapt to your needs. 
- Include the HTML template, and then the felios component specific script right before the ending or closing body HTML Tag, like shown below

```html
...
	<body>
					
		<!--include HTML Template-->
		<div id="felios-<component>">...</div>	

		<div>Content</div>
		<footer>..</foooter>
		
		<!--include javascript-->
		<script src="./path/to/felios.js>"></script>
		<script src="./path/to/felios-<component>"></script>
	</body>
...
```

- Replace `<component>`  in ``` felios-<component>``` with the component you wish to use, ex. `input`, `toggle`, `switch`, etc.



## Releases
### version 0.0.0.1 
#### Features

- [x] Trigger Events
- [x] Notify Actions
- [x] File Uploader [ uses php ]
- [x] Real-time component rendering
- [x] Night Mode Toggling


### Some possible use cases

- Realistic Native UI Prototyping.
- Single page application.
- One time call, components.


### Still to-do

- [ ] Auto-refresh
- [ ] Auto-suggestion Search
- [ ] Style Guide Generator




### Contributors

   [ Humphrey Pietersen ](https://humphreypietersen.com/)


### Contribution

  Contributions are welcome, see code of conduct.


Humphrey Pietersen  &copy; 2021 - 2022. Licensed under [MIT](https://github.com/huffypiet/felios.js/blob/main/LICENSE)



