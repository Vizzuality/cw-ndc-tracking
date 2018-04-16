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

No dependencies
