# Components

* [BackButton](#backbutton)
* [Button](#button)
* [Dropdown](#dropdown)
* [Header](#header)
* [Icon](#icon)
* [InfoButton](#infobutton)
* [Input](#input)
* [Indicator](#indicator)
* [Input](#input)
* [Menu](#menu)
* [Nav](#nav)
* [NavLinks](#navLinks)
* [Progress Bar](#progressbar)
* [Search](#search)
* [Loading](#loading)

The components used in the page are documented here with some basic information about them:

- Snapshot
- Use example
- Props
- Dependencies

## BackButton

> ![](../assets/components/button-back.png)

```
  <BackButton />
```

#### Props
- className: oneOfType([string, array]),

#### Dependencies

- [redux-first-router-link](https://github.com/faceyspacey/redux-first-router-link)

- [Icon](#icon)
- [Button](#button)

## Button

> ![](../assets/components/button.png)

```
<Button
  onClick={handleClick}
>
  Click me
</Button>
```
> ![](../assets/components/button-disabled.png)

```
<Button>I don't have an action</Button>
<Button disabled >
  I wish you could click me
</Button>
```

> ![](../assets/components/button-yellow.png)

```
<Button
  onClick={handleClick}
  theme={yellowButtonTheme}
>
  Click me
</Button>
```

> ![](../assets/components/button-square.png)

```
  <Button
    theme={squareButtonTheme}
    onClick={() => true}
  >
    <Icon theme={blueIconTheme} icon={deleteIcon} />
  </Button>
```

#### Props
- children: node,
- href: string,
- className: oneOfType([string, array]),
- link: string,
- disabled: bool,
- onClick: func,
- theme: object

#### Dependencies

- [redux-first-router-link](https://github.com/faceyspacey/redux-first-router-link)
- [react-css-themr](https://github.com/javivelasco/react-css-themr)

- [Icon](#icon)

## Dropdown

> ![](../assets/components/dropdown.png)

> ![](../assets/components/dropdown-open.png)

> ![](../assets/components/dropdown-disabled.png)

```
<Dropdown
  placeholder="selection"
  options={[
    { label: 'uno', value: 'uno' },
    { label: 'dos', value: 'dos' }
  ]}
  label="select some stuff"
  defaultValue="uno"
  handleChange={(value) => doSomething(value)}
  disabled
/>

```

#### Props
- label: string
- wrapperClassName: string
- className: string
- theme: object
- hasSearch: bool
- disabled: bool
- defaultValue: string
- handleChange: func
- selectorRef: func

#### Dependencies

- [react-selectize](https://github.com/furqanZafar/react-selectize)
- [react-css-themr](https://github.com/javivelasco/react-css-themr)
- [Icon](#icon)
- [recompose](https://github.com/acdlite/recompose)
- [lodash/sortBy](https://lodash.com/docs/4.17.5#sortBy)

##### `react-selectize` dependencies (read [this](https://github.com/furqanZafar/react-selectize#peer-deps) for more info)
- react-dom 16.2.0
`npm install react-dom@16.2.0`
(16.3.0 version triggers [this error](https://gist.github.com/jimfb/4faa6cbfb1ef476bd105)).
- react-dom-factories 1.0.2
`npm install react-dom-factories@1.0.2`

## Header

> ![](../assets/components/header.png)

```
<Header
  title="Planning"
  routes={this.props.routes}
  actions={
    <div className={styles.actionLayout}>
      ...
    </div>
  }
  backButton
/>
```

#### Props
- backButton: PropTypes.bool,
- title: PropTypes.string,
- routes: PropTypes.array, // routes for the navigation tab
- actions: PropTypes.node  // buttons, dropdowns, ... on the right

#### Dependencies

- [classnames](https://github.com/JedWatson/classnames)

- [NavLinks](#navlinks)
- [BackButton](#backbutton)

## Icon

> ![](../assets/components/icon.png)

```
  <Icon icon={searchIcon} />
```

#### Props

- icon: object,
- className: string,
- theme: object

#### Dependencies

- [react-css-themr](https://github.com/javivelasco/react-css-themr)

## Indicator

> ![](../assets/components/indicator.png)

```
  <Indicator title="title" values=[] onBlur={() => true}/>
```

#### Props

- title: string
- theme: object
- values: array
- handleBlur: function
- infoText: string

#### Dependencies

- [react-css-themr](https://github.com/javivelasco/react-css-themr)

## InfoButton

This button its supposed to show a tooltip when hovered. Remember to add the ```<ReactTooltip />``` component to the parent ant to import [react-tooltip](https://github.com/wwayne/react-tooltip)

> ![](../assets/components/button-info.png)


```
  <InfoButton text="Cool!"/>
```

#### Props

- className: oneOfType([string, array]),
- text: string.isRequired // The text for the tooltip

#### Dependencies

- [classnames](https://www.npmjs.com/package/classnames)

- [Icon](#icon)

## Input

> ![](../assets/components/input.png)

```
  <Input
    label="Label for CO2"
    unit="CO2"
    inputType="text"
    placeholder="Input some text"
    onChange={(value) => console.log('this is the' + value)}
    onBlur={(value) => console.log('Out of input - this is the' + value)}
  />
```

> ![](../assets/components/input-disabled.png)

```
  <Input
    disabled
    label="Label for CO2"
    unit="CO2"
    inputType="text"
    placeholder="Input some text"
    onChange={(value) => console.log('this is the' + value)}
    onBlur={(value) => console.log('Out of input - this is the' + value)}
  />
```

> ![](../assets/components/input-not-applicable.png)

```
  <Input
    notApplicable
    inputType="text"
    onBlur={(value) => console.log('Out of input - this is the' + value)}
  />
```

> ![](../assets/components/input-number.png)

```
  <Input
    label="Label for number"
    unit="%"
    inputType="number"
    placeholder="Input some number"
    onChange={(value) => console.log('this is the' + value)}
    onBlur={(value) => console.log('Out of input - this is the' + value)}
  />
```
> ![](../assets/components/input-text-area.png)

```
  <Input
    label="Label for text area"
    unit="CO2"
    inputType="textarea"
    placeholder="Text Area"
    onChange={(value) => console.log('this is the' + value)}
    onBlur={(value) => console.log('Out of input - this is the' + value)}
  />
```

#### Props

- value: string,
- placeholder: string,
- autofocus: bool,
- onChange: func,
- onBlur: func,
- className: string,
- theme: object,
- handleKeyUp: func,
- inputType: oneOf(['textarea', 'number', 'text']),
- disabled: bool,
- notApplicable: bool, // Grey by default and updates to normal when filled
- label: string, // optional
- unit: string  // optional

#### Dependencies

- [react-css-themr](https://github.com/javivelasco/react-css-themr)
- [lodash/debounce](https://www.npmjs.com/package/lodash.debounce)
- [classnames](https://www.npmjs.com/package/classnames)

## Menu

> ![](/../assets/components/menu.png)

```
  <Menu
    options={menuOptions}
    icon={menuIcon}
    title={'User Name'}
  />
```

#### Props
- className: string,
- options: array  // from container (Options can have: )
- icon: file
- title: string
- reverse: boolean
- positionRight: boolean
- buttonClassName: string
- currentPathname: string
- succesfulActions: PropTypes.array
- open: PropTypes.bool
- toggleOpen: PropTypes.func.isRequired
- handleCloseMenu: PropTypes.func.isRequired

#### Dependencies

- [classnames](https://github.com/JedWatson/classnames)

- [Icon](#icon)
- [redux-first-router-link](https://github.com/faceyspacey/redux-first-router-link)
- [lodash/includes](https://lodash.com/docs/4.17.5#includes)
- [tj/react-click-outside](https://github.com/tj/react-click-outside)
- checkIcon and arrow icons from assets

## Nav

> ![](/../assets/components/navbar.png)

```
<Nav/>
```

#### Props
- className: string,
- routes: array.isRequired, // from container
- actions: array  // from container

#### Dependencies

- [classnames](https://github.com/JedWatson/classnames)

- [Icon](#icon)
- [NavLinks](#nav-links)

## NavLinks

> ![](../assets/components/nav-links.png)

```
  <NavLinks routes={routes} />
```

#### Props
- className: string,
- routes: array.isRequired,
- theme: object

#### Dependencies

- [redux-first-router-link](https://github.com/faceyspacey/redux-first-router-link)
- [classnames](https://github.com/JedWatson/classnames)
- [react-css-themr](https://github.com/javivelasco/react-css-themr)

#### ProgressBar

> ![](../assets/components/progress-bar.png)
> ![](../assets/components/progress-bar-full.png)

```
  <ProgressBar progress={50} />
```

#### Props

- progress: number

#### Dependencies

None

## Search

> ![](../assets/components/search.png)

```
<Search
  placeholder="Search something"
  value={searchValue}
  onChange={handleOnChange}
  className={styles.search}
  theme={searchTheme}
  autofocus
/>
```

#### Props

- value: string, // value of the search input
- placeholder: string,
- autofocus: bool, // focus on load
- onChange: func,
- className: string,
- theme: object,
- handleKeyUp: func,
- disabled: bool

#### Dependencies

- [react-css-themr](https://github.com/javivelasco/react-css-themr)

## Loading

> ![](../assets/components/loading.png)

```
<Loading className={styles.loader} />
```

#### Props

- className: PropTypes.string,
- height: PropTypes.any, default: 'auto'
- mini: PropTypes.bool, default: false

#### Dependencies

- [classnames](https://github.com/JedWatson/classnames)
