# Components

The components used in the page are documented here with some basic information about them:

- Snapshot
- Use example
- Props
- Dependencies

## Search

> ![](.gitbook/assets/components/search.png)

```
<Search
  placeholder="Search something"
  value={searchValue}
  onChange={handleOnChante}
  className={styles.search}
  theme={searchTheme}
  autofocus
/>
```

Props = {
  value: PropTypes.string, // value of the search input
  placeholder: PropTypes.string,
  autofocus: PropTypes.bool, // focus on load
  onChange: PropTypes.func,
  className: PropTypes.string,
  theme: PropTypes.object,
  handleKeyUp: PropTypes.func,
  disabled: PropTypes.bool
};

Dependencies:

- 'react-css-themr';

## Button

> ![](.gitbook/assets/components/button.png)

```
<Button
  onClick={handleClick}
>
  Click me
</Button>
```
> ![](.gitbook/assets/components/button-disabled.png)

```
<Button>I don't have an action</Button>
<Button disabled >
  I wish you could click me
</Button>
```

> ![](.gitbook/assets/components/button-yellow.png)

```
<Button
  onClick={handleClick}
  theme={yellowButtonTheme}
>
  Click me
</Button>
```

> ![](.gitbook/assets/components/button-square.png)

```
  <Button
    theme={squareButtonTheme}
    onClick={() => true}
  >
    <Icon theme={blueIconTheme} icon={deleteIcon} />
  </Button>
```
> ![](.gitbook/assets/components/button-back.png)

```
  <Button
    theme={squareButtonTheme}
    onClick={() => true}
  >
    <Icon theme={blueIconTheme} icon={backIcon} />
  </Button>
```

Props = {
  children: PropTypes.node,
  href: PropTypes.string,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  link: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  theme: PropTypes.object
};

Dependencies:

- 'redux-first-router-link'
- 'react-css-themr';
