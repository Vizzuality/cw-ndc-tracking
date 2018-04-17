# Components

* [Icon](#icon)
* [Search](#search)
* [Button](#button)
* [Input](#input)

The components used in the page are documented here with some basic information about them:

- Snapshot
- Use example
- Props
- Dependencies

## Icon

> ![Icon component](/.gitbook/assets/components/icon.png)

```
  <Icon icon={searchIcon} />
```

#### Props

- icon: object,
- className: string,
- theme: object

#### Dependencies

- [react-css-themr](https://github.com/javivelasco/react-css-themr)

## Search

> ![Search component](/.gitbook/assets/components/search.png)

```
<Search
  placeholder="Search something"
  value={searchValue}
  onChange={handleOnChange}
  className={styles.search}
  theme={searchTheme}
  autofocus
/>```

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

## Button

> ![](/.gitbook/assets/components/button.png)

```
<Button
  onClick={handleClick}
>
  Click me
</Button>
```
> ![](/.gitbook/assets/components/button-disabled.png)

```
<Button>I don't have an action</Button>
<Button disabled >
  I wish you could click me
</Button>
```

> ![](/.gitbook/assets/components/button-yellow.png)

```
<Button
  onClick={handleClick}
  theme={yellowButtonTheme}
>
  Click me
</Button>
```

> ![](/.gitbook/assets/components/button-square.png)

```
  <Button
    theme={squareButtonTheme}
    onClick={() => true}
  >
    <Icon theme={blueIconTheme} icon={deleteIcon} />
  </Button>
```
> ![](/.gitbook/assets/components/button-back.png)

```
  <Button
    theme={squareButtonTheme}
    onClick={() => true}
  >
    <Icon theme={blueIconTheme} icon={backIcon} />
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

## Input

> ![](/.gitbook/assets/components/input.png)

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

> ![](/.gitbook/assets/components/input-disabled.png)

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

> ![](/.gitbook/assets/components/input-not-applicable.png)

```
  <Input
    notApplicable
    inputType="text"
    onBlur={(value) => console.log('Out of input - this is the' + value)}
  />
```

> ![](/.gitbook/assets/components/input-number.png)

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
> ![](/.gitbook/assets/components/input-text-area.png)

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
- label: string, // optional
- unit: string  // optional

#### Dependencies

- [react-css-themr](https://github.com/javivelasco/react-css-themr)
- [lodash/debounce](https://www.npmjs.com/package/lodash.debounce)
- [classnames](https://www.npmjs.com/package/classnames)
