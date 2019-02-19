# Carbon Components React

[![CircleCI](https://circleci.com/gh/IBM/carbon-components-react.svg?style=shield)](https://circleci.com/gh/IBM/carbon-components-react)
[![All Contributors](https://img.shields.io/badge/all_contributors-64-orange.svg?style=flat-square)](#contributors)
[![Greenkeeper badge](https://badges.greenkeeper.io/IBM/carbon-components-react.svg)](https://greenkeeper.io/)

> A collection of [Carbon Components](https://github.com/IBM/carbon-components) implemented using [React](https://facebook.github.io/react/).

## Usage

### List of Available Components

View available React Components [here](http://react.carbondesignsystem.com). You can see usage information in several ways:

1. Clicking the blue **Show Info** icon in the top right corner of the selected component. You can see the list of available React props
2. Clicking the **STORY** tab at the bottom. This tab contains the code that shows how the component is being used
3. Clicking the **KNOBS** tab at the bottom and changing values there. Most knobs are shown as something like `Button kind (kind)`, where `kind` is the name of React prop
4. Clicking the **ACTION LOGGER** tab at the bottom and interacting with the selected component. You may see something like `onClick` which typically indicates that the event handler (React prop) with the same name is called. You can also expand the twistie to see the details of the event
5. Clicking the **README** tab at the bottom. You can see some more document for some components

### Getting Started

Run the following command using [npm](https://www.npmjs.com/):

```bash
npm install -S carbon-components-react carbon-components carbon-icons
```

If you prefer [Yarn](https://yarnpkg.com/en/), use the following command instead:

```bash
yarn add carbon-components-react carbon-components carbon-icons
```

1. These components require the use of [Webpack](http://webpack.github.io/docs/tutorials/getting-started/) in your project. See our [`webpack.config.js`](/.storybook/webpack.config.js) for an example configuration.

2. Components do not import any of the styles themselves, use the scss or css from `carbon-components` to bring in styling. You can also use the `unpkg` cdn to bring in the styles wholesale - `unpkg.com/carbon-components/css/carbon-components.css` aliases the latest css file.

3. For older browsers (e.g. IE11), polyfills listed in [`carbon-components-react/.storybook/polyfills.js` file](./.storybook/polyfills.js) is required.

If you just want to try out `carbon-components-react`, you can also use [CodeSandbox](https://codesandbox.io/s/github/IBM/carbon-components-react/tree/master/examples/codesandbox).

[![Edit carbon-components-react](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/IBM/carbon-components-react/tree/master/examples/codesandbox)

## Development

Please refer to the [Contribution Guidelines](./.github/CONTRIBUTING.md) before starting any work.

### Using the server

We recommend the use of [React Storybook](https://github.com/storybooks/react-storybook) for developing components.

1. (Optional) Set environment variables:

   - `true` to `CARBON_USE_EXPERIMENTAL_FEATURES` environment variable to test some of the experimental features:

     ```
     $ export CARBON_USE_EXPERIMENTAL_FEATURES=true
     ```

   - `true` to `CARBON_REACT_STORYBOOK_USE_EXTERNAL_CSS` environment variable to use external CSS, making style source link usable in DOM inspector:

     ```
     $ export CARBON_REACT_STORYBOOK_USE_EXTERNAL_CSS=true
     ```

   - `true` to `CARBON_REACT_STORYBOOK_USE_STYLE_SOURCEMAP` environment variable to use Sass source map, making style source link point to the original Sass code:

     ```
     $ export CARBON_REACT_STORYBOOK_USE_STYLE_SOURCEMAP=true
     ```

Caveats:

- `CARBON_REACT_STORYBOOK_USE_EXTERNAL_CSS=true` and `CARBON_REACT_STORYBOOK_USE_STYLE_SOURCEMAP=true` make WebPack builds slightly slower.
- With `CARBON_REACT_STORYBOOK_USE_STYLE_SOURCEMAP=true`, the source map (hitting style source link in DOM inspector) sometimes leads you to a mix-in, instead of a style rule calling the mix-in, which may get you lost.

2. Start the server:

   ```
   $ yarn storybook
   ```

3. Open browser to `http://localhost:9000/`.

4. Develop components in their respective folders (`/components` or `/internal`).

5. Write stories for your components in `/.storybook`.

## Contributing

Please check out our [Contribution Guidelines](./.github/CONTRIBUTING.md) for detailed information on how you can lend a hand.

To update the `Contributors` section, follow [these instructions](https://github.com/jfmengels/all-contributors-cli#addupdate-contributors)

## Contributors

Thanks goes to these wonderful people:

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->

<!-- prettier-ignore -->
| [<img src="https://avatars3.githubusercontent.com/u/4185382?v=4" width="100px;"/><br /><sub><b>Brian Han</b></sub>](https://github.com/hellobrian)<br />[💻](https://github.com/IBM/carbon-components-react/commits?author=hellobrian "Code") | [<img src="https://avatars2.githubusercontent.com/u/1266014?v=4" width="100px;"/><br /><sub><b>Chris Dhanaraj</b></sub>](http://twitter.com/chrisdhanaraj)<br />[💻](https://github.com/IBM/carbon-components-react/commits?author=chrisdhanaraj "Code") | [<img src="https://avatars0.githubusercontent.com/u/181819?v=4" width="100px;"/><br /><sub><b>Nick Sandonato</b></sub>](https://github.com/nsand)<br />[💻](https://github.com/IBM/carbon-components-react/commits?author=nsand "Code") | [<img src="https://avatars1.githubusercontent.com/u/11928039?v=4" width="100px;"/><br /><sub><b>TJ Egan</b></sub>](http://tw15egan.github.io/portfolio)<br />[💻](https://github.com/IBM/carbon-components-react/commits?author=tw15egan "Code") | [<img src="https://avatars0.githubusercontent.com/u/5447411?v=4" width="100px;"/><br /><sub><b>Mari Johannessen</b></sub>](http://www.marijohannessen.com)<br />[💻](https://github.com/IBM/carbon-components-react/commits?author=marijohannessen "Code") | [<img src="https://avatars1.githubusercontent.com/u/8836958?v=4" width="100px;"/><br /><sub><b>Sam Doyle</b></sub>](https://github.com/sam1463)<br />[💻](https://github.com/IBM/carbon-components-react/commits?author=sam1463 "Code") | [<img src="https://avatars0.githubusercontent.com/u/6420214?v=4" width="100px;"/><br /><sub><b>alex weidner</b></sub>](https://github.com/shimmerjs)<br />[💻](https://github.com/IBM/carbon-components-react/commits?author=shimmerjs "Code") |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [<img src="https://avatars0.githubusercontent.com/u/13645183?v=4" width="100px;"/><br /><sub><b>Ciaran Hannigan</b></sub>](https://github.com/CiaranHannigan)<br />[💻](https://github.com/IBM/carbon-components-react/commits?author=CiaranHannigan "Code") | [<img src="https://avatars2.githubusercontent.com/u/5481782?v=4" width="100px;"/><br /><sub><b>Ian Fleming</b></sub>](http://ianfleming.me/)<br />[💻](https://github.com/IBM/carbon-components-react/commits?author=iangfleming "Code") | [<img src="https://avatars3.githubusercontent.com/u/127535?v=4" width="100px;"/><br /><sub><b>Eddie Monge</b></sub>](http://eddiemonge.com)<br />[💻](https://github.com/IBM/carbon-components-react/commits?author=eddiemonge "Code") | [<img src="https://avatars3.githubusercontent.com/u/4438261?v=4" width="100px;"/><br /><sub><b>Reinaldo Cruz</b></sub>](http://www.reicruz.com/)<br />[💻](https://github.com/IBM/carbon-components-react/commits?author=reicruz "Code") | [<img src="https://avatars3.githubusercontent.com/u/16092291?v=4" width="100px;"/><br /><sub><b>Yu Cao</b></sub>](https://github.com/ycao56)<br />[💻](https://github.com/IBM/carbon-components-react/commits?author=ycao56 "Code") | [<img src="https://avatars1.githubusercontent.com/u/20566244?v=4" width="100px;"/><br /><sub><b>Megan Becvarik</b></sub>](https://github.com/mbecvarik)<br />[💻](https://github.com/IBM/carbon-components-react/commits?author=mbecvarik "Code") | [<img src="https://avatars0.githubusercontent.com/u/21059894?v=4" width="100px;"/><br /><sub><b>Astha</b></sub>](https://github.com/AsthaJain1)<br />[💻](https://github.com/IBM/carbon-components-react/commits?author=AsthaJain1 "Code") |
| [<img src="https://avatars2.githubusercontent.com/u/163561?v=4" width="100px;"/><br /><sub><b>Jason Lengstorf</b></sub>](https://code.lengstorf.com)<br />[💻](https://github.com/IBM/carbon-components-react/commits?author=jlengstorf "Code") | [<img src="https://avatars3.githubusercontent.com/u/114976?v=4" width="100px;"/><br /><sub><b>Nathan Friedly</b></sub>](http://nfriedly.com/)<br />[💻](https://github.com/IBM/carbon-components-react/commits?author=nfriedly "Code") | [<img src="https://avatars2.githubusercontent.com/u/130131?v=4" width="100px;"/><br /><sub><b>Matt Hamann</b></sub>](http://mhamann.com)<br />[💻](https://github.com/IBM/carbon-components-react/commits?author=mhamann "Code") | [<img src="https://avatars1.githubusercontent.com/u/2159110?v=4" width="100px;"/><br /><sub><b>Greg</b></sub>](https://github.com/gferreri)<br />[💻](https://github.com/IBM/carbon-components-react/commits?author=gferreri "Code") | [<img src="https://avatars0.githubusercontent.com/u/5459406?v=4" width="100px;"/><br /><sub><b>Anthony Oliveri</b></sub>](https://github.com/AnthonyOliveri)<br />[💻](https://github.com/IBM/carbon-components-react/commits?author=AnthonyOliveri "Code") | [<img src="https://avatars3.githubusercontent.com/u/4671325?v=4" width="100px;"/><br /><sub><b>Jorge Padilla</b></sub>](https://github.com/jlpadilla)<br />[💻](https://github.com/IBM/carbon-components-react/commits?author=jlpadilla "Code") | [<img src="https://avatars3.githubusercontent.com/u/313157?v=4" width="100px;"/><br /><sub><b>German Attanasio</b></sub>](http://germanattanasio.com)<br />[💻](https://github.com/IBM/carbon-components-react/commits?author=germanattanasio "Code") |
| [<img src="https://avatars1.githubusercontent.com/u/462228?v=4" width="100px;"/><br /><sub><b>Ritchie Martori</b></sub>](https://github.com/ritch)<br />[💻](https://github.com/IBM/carbon-components-react/commits?author=ritch "Code") | [<img src="https://avatars1.githubusercontent.com/u/1259051?v=4" width="100px;"/><br /><sub><b>Akira Sudoh</b></sub>](http://streetphoto.jp/)<br />[💻](https://github.com/IBM/carbon-components-react/commits?author=asudoh "Code") | [<img src="https://avatars1.githubusercontent.com/u/30137991?v=4" width="100px;"/><br /><sub><b>holmansze</b></sub>](https://github.com/holmansze)<br />[💻](https://github.com/IBM/carbon-components-react/commits?author=holmansze "Code") | [<img src="https://avatars1.githubusercontent.com/u/3901764?v=4" width="100px;"/><br /><sub><b>Josh Black</b></sub>](https://github.com/joshblack)<br />[💻](https://github.com/IBM/carbon-components-react/commits?author=joshblack "Code") [📖](https://github.com/IBM/carbon-components-react/commits?author=joshblack "Documentation") [💡](#example-joshblack "Examples") [🚇](#infra-joshblack "Infrastructure (Hosting, Build-Tools, etc)") | [<img src="https://avatars0.githubusercontent.com/u/29312997?v=4" width="100px;"/><br /><sub><b>Tayler Aitken</b></sub>](http://tayleraitken.com)<br />[🎨](#design-tay-aitken "Design") [📖](https://github.com/IBM/carbon-components-react/commits?author=tay-aitken "Documentation") | [<img src="https://avatars2.githubusercontent.com/u/11233508?v=4" width="100px;"/><br /><sub><b>Bethany Sonefeld</b></sub>](http://www.bethanysonefeld.com)<br />[🎨](#design-bsonefeld "Design") | [<img src="https://avatars3.githubusercontent.com/u/1697656?v=4" width="100px;"/><br /><sub><b>Dmitri Wolf</b></sub>](https://github.com/DmitriWolf)<br />[💻](https://github.com/IBM/carbon-components-react/commits?author=DmitriWolf "Code") |
| [<img src="https://avatars2.githubusercontent.com/u/20052710?v=4" width="100px;"/><br /><sub><b>James</b></sub>](https://github.com/jamesvclements)<br />[💻](https://github.com/IBM/carbon-components-react/commits?author=jamesvclements "Code") | [<img src="https://avatars0.githubusercontent.com/u/2426829?v=4" width="100px;"/><br /><sub><b>Kade Keith</b></sub>](http://kadekeith.me/)<br />[💻](https://github.com/IBM/carbon-components-react/commits?author=keithkade "Code") | [<img src="https://avatars1.githubusercontent.com/u/11800028?v=4" width="100px;"/><br /><sub><b>Mira Murali</b></sub>](https://github.com/miramurali23)<br />[💻](https://github.com/IBM/carbon-components-react/commits?author=miramurali23 "Code") | [<img src="https://avatars2.githubusercontent.com/u/17085131?v=4" width="100px;"/><br /><sub><b>alisonemiller</b></sub>](https://github.com/alisonemiller)<br />[💻](https://github.com/IBM/carbon-components-react/commits?author=alisonemiller "Code") | [<img src="https://avatars0.githubusercontent.com/u/8770483?v=4" width="100px;"/><br /><sub><b>bjones526</b></sub>](https://github.com/bjones526)<br />[💻](https://github.com/IBM/carbon-components-react/commits?author=bjones526 "Code") | [<img src="https://avatars2.githubusercontent.com/u/32277486?v=4" width="100px;"/><br /><sub><b>sandhya-r-reddy</b></sub>](https://github.com/sandhya-r-reddy)<br />[💻](https://github.com/IBM/carbon-components-react/commits?author=sandhya-r-reddy "Code") | [<img src="https://avatars0.githubusercontent.com/u/2753488?v=4" width="100px;"/><br /><sub><b>Alison Joseph</b></sub>](https://github.com/alisonjoseph)<br />[💻](https://github.com/IBM/carbon-components-react/commits?author=alisonjoseph "Code") |
| [<img src="https://avatars0.githubusercontent.com/u/14316696?v=4" width="100px;"/><br /><sub><b>Dogukan</b></sub>](https://github.com/ereneld)<br />[💻](https://github.com/IBM/carbon-components-react/commits?author=ereneld "Code") | [<img src="https://avatars2.githubusercontent.com/u/13935994?v=4" width="100px;"/><br /><sub><b>Erika Dsouza</b></sub>](https://github.com/ehdsouza)<br />[💻](https://github.com/IBM/carbon-components-react/commits?author=ehdsouza "Code") | [<img src="https://avatars2.githubusercontent.com/u/4943036?v=4" width="100px;"/><br /><sub><b>Jeroen Schaftenaar</b></sub>](https://github.com/jschaftenaar)<br />[💻](https://github.com/IBM/carbon-components-react/commits?author=jschaftenaar "Code") | [<img src="https://avatars1.githubusercontent.com/u/16617646?v=4" width="100px;"/><br /><sub><b>Joseph Meis</b></sub>](http://bluemix.net)<br />[💻](https://github.com/IBM/carbon-components-react/commits?author=jmeis "Code") | [<img src="https://avatars2.githubusercontent.com/u/11449728?v=4" width="100px;"/><br /><sub><b>Paul Sachs</b></sub>](https://github.com/psachs21)<br />[💻](https://github.com/IBM/carbon-components-react/commits?author=psachs21 "Code") | [<img src="https://avatars2.githubusercontent.com/u/17710824?v=4" width="100px;"/><br /><sub><b>Ryan Mackey</b></sub>](https://github.com/ryanomackey)<br />[💻](https://github.com/IBM/carbon-components-react/commits?author=ryanomackey "Code") | [<img src="https://avatars2.githubusercontent.com/u/4289301?v=4" width="100px;"/><br /><sub><b>Toni</b></sub>](https://github.com/tonitagd)<br />[💻](https://github.com/IBM/carbon-components-react/commits?author=tonitagd "Code") |
| [<img src="https://avatars3.githubusercontent.com/u/29720673?v=4" width="100px;"/><br /><sub><b>shyfruan</b></sub>](https://github.com/shyfruan)<br />[💻](https://github.com/IBM/carbon-components-react/commits?author=shyfruan "Code") | [<img src="https://avatars1.githubusercontent.com/u/7243419?s=400&v=4" width="100px;"/><br /><sub><b>Joseph Gordon</b></sub>](https://github.com/JMGordon)<br />[💻](https://github.com/IBM/carbon-components-react/commits?author=JMGordon "Code") | [<img src="https://avatars3.githubusercontent.com/u/7374889?s=400&v=4" width="100px;"/><br /><sub><b>Logan McCaul</b></sub>](https://github.com/loganmccaul)<br />[💻](https://github.com/IBM/carbon-components-react/commits?author=loganmccaul "Code") | [<img src="https://avatars2.githubusercontent.com/u/14233261?s=400&v=4" width="100px;"/><br /><sub><b>Matt Chapman</b></sub>](https://github.com/asfordmatt)<br />[💻](https://github.com/IBM/carbon-components-react/commits?author=asfordmatt "Code") | [<img src="https://avatars1.githubusercontent.com/u/6663002?s=400&v=4" width="100px;"/><br /><sub><b>Scott Dickerson</b></sub>](https://github.com/scottdickerson)<br />[💻](https://github.com/IBM/carbon-components-react/commits?author=scottdickerson "Code") | [<img src="https://avatars3.githubusercontent.com/u/32717?s=400&v=4" width="100px;"/><br /><sub><b>Darío Hereñú</b></sub>](https://github.com/kant)<br />[💻](https://github.com/IBM/carbon-components-react/commits?author=kant "Code") | [<img src="https://avatars3.githubusercontent.com/u/1449523?s=400&v=4" width="100px;"/><br /><sub><b>James Zhang</b></sub>](https://github.com/jzhang300)<br />[💻](https://github.com/IBM/carbon-components-react/commits?author=jzhang300 "Code") |
| [<img src="https://avatars0.githubusercontent.com/u/6776917?s=400&v=4" width="100px;"/><br /><sub><b>Simone Riccardelli</b></sub>](https://github.com/michead)<br />[💻](https://github.com/IBM/carbon-components-react/commits?author=michead "Code") | [<img src="https://avatars2.githubusercontent.com/u/7711697?s=400&v=4" width="100px;"/><br /><sub><b>Tom</b></sub>](https://github.com/Tom-Danger-Bryant)<br />[💻](https://github.com/IBM/carbon-components-react/commits?author=Tom-Danger-Bryant "Code") | [<img src="https://avatars2.githubusercontent.com/u/2263351?s=400&v=4" width="100px;"/><br /><sub><b>Zeus Courtois</b></sub>](https://github.com/zeusorion)<br />[💻](https://github.com/IBM/carbon-components-react/commits?author=zeusorion "Code") | [<img src="https://avatars1.githubusercontent.com/u/867941?v=4" width="100px;"/><br /><sub><b>Andrew Daniel</b></sub>](http://www.andrewdaniel.co.uk)<br />[🐛](https://github.com/IBM/carbon-components-react/issues?q=author%3Aajdaniel "Bug reports") [💻](https://github.com/IBM/carbon-components-react/commits?author=ajdaniel "Code") | [<img src="https://avatars1.githubusercontent.com/u/36265276?v=4" width="100px;"/><br /><sub><b>Andy</b></sub>](https://github.com/AndySeymour2904)<br />[🐛](https://github.com/IBM/carbon-components-react/issues?q=author%3AAndySeymour2904 "Bug reports") [💻](https://github.com/IBM/carbon-components-react/commits?author=AndySeymour2904 "Code") | [<img src="https://avatars3.githubusercontent.com/u/7650400?v=4" width="100px;"/><br /><sub><b>Nicholas Lee</b></sub>](https://github.com/nicholaslee119)<br />[💻](https://github.com/IBM/carbon-components-react/commits?author=nicholaslee119 "Code") | [<img src="https://avatars1.githubusercontent.com/u/6370760?v=4" width="100px;"/><br /><sub><b>David Menendez</b></sub>](http://davidmenendez.net)<br />[💻](https://github.com/IBM/carbon-components-react/commits?author=davidmenendez "Code") |
| [<img src="https://avatars0.githubusercontent.com/u/14758158?v=4" width="100px;"/><br /><sub><b>Prashant Farkya</b></sub>](https://github.com/pfarkya)<br />[💻](https://github.com/IBM/carbon-components-react/commits?author=pfarkya "Code") | [<img src="https://avatars1.githubusercontent.com/u/4045950?v=4" width="100px;"/><br /><sub><b>Tibor Cz</b></sub>](https://neonwarp.github.io)<br />[📖](https://github.com/IBM/carbon-components-react/commits?author=neonwarp "Documentation") | [<img src="https://avatars3.githubusercontent.com/u/10108576?v=4" width="100px;"/><br /><sub><b>Xixiang Chen</b></sub>](https://github.com/nelsonchen90)<br />[💻](https://github.com/IBM/carbon-components-react/commits?author=nelsonchen90 "Code") | [<img src="https://avatars1.githubusercontent.com/u/9932290?v=4" width="100px;"/><br /><sub><b>s100</b></sub>](https://github.com/s100)<br />[💻](https://github.com/IBM/carbon-components-react/commits?author=s100 "Code") | [<img src="https://avatars2.githubusercontent.com/u/17937450?v=4" width="100px;"/><br /><sub><b>Becca Ellsworth</b></sub>](https://github.com/bellsworth13)<br />[💻](https://github.com/IBM/carbon-components-react/commits?author=bellsworth13 "Code") | [<img src="https://avatars2.githubusercontent.com/u/664044?v=4" width="100px;"/><br /><sub><b>Zack Grossbart</b></sub>](http://www.zackgrossbart.com/)<br />[💻](https://github.com/IBM/carbon-components-react/commits?author=zgrossbart "Code") | [<img src="https://avatars0.githubusercontent.com/u/6926228?v=4" width="100px;"/><br /><sub><b>Yohanna Gadelrab</b></sub>](https://github.com/Yohanna)<br />[💻](https://github.com/IBM/carbon-components-react/commits?author=Yohanna "Code") [🐛](https://github.com/IBM/carbon-components-react/issues?q=author%3AYohanna "Bug reports") [⚠️](https://github.com/IBM/carbon-components-react/commits?author=Yohanna "Tests") [📖](https://github.com/IBM/carbon-components-react/commits?author=Yohanna "Documentation") |
| [<img src="https://avatars3.githubusercontent.com/u/890?v=4" width="100px;"/><br /><sub><b>Carlos Eduardo Monti</b></sub>](http://www.gfxnstuff.com.ar)<br />[💻](https://github.com/IBM/carbon-components-react/commits?author=slaytanic "Code") [📖](https://github.com/IBM/carbon-components-react/commits?author=slaytanic "Documentation") | [<img src="https://avatars0.githubusercontent.com/u/36549917?s=460&v=4" width="100px;"/><br /><sub><b>Thomas Brown</b></sub>](https://www.tombrowndev.co.uk)<br />[💻](https://github.com/IBM/carbon-components-react/commits?author=tombrowndev "Code") |

<!-- ALL-CONTRIBUTORS-LIST:END -->
