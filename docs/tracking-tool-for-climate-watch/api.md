# API

## Sections

### `GET /api/v1/sections`

#### Parameters:
- `includes` - array of nested resources to include. Available values: `categories`, `targets`

#### Examples:

- `GET /api/v1/sections`

```
[
   {
      "title":"Planning",
      "slug":"planning"
   },
   {
      "title":"Tracking",
      "slug":"tracking"
   }
]
```

- `GET /api/v1/sections?includes[]=categories`

```
[
   {
      "title":"Planning",
      "slug":"planning",
      "categories":[
         {
            "title":"NDC Targets",
            "slug":"ndc_targets"
         },
         ...
      ]
   },
  ...
]
```

- `/api/v1/sections?includes[]=categories&includes[]=targets`

```
[
   {
      "title":"Planning",
      "slug":"planning",
      "categories":[
         {
            "title":"NDC Targets",
            "slug":"ndc_targets",
            "targets":[
               {
                  "title":"GHG Target",
                  "slug":"ghg_target"
               },
               {
                  "title":"Non-GHG Target",
                  "slug":"ghg_target"
               }
            ]
         },
         ...
      ]
   },
  ...
]
```

### `GET /api/v1/sections/:slug`

#### Parameters:
- same as for collection

#### Examples:

- `GET /api/v1/sections/planning`

```
   {
      "title":"Planning",
      "slug":"planning"
   }
```

## Categories

### `GET /api/v1/sections/:section_slug/categories`

#### Parameters:
- `includes` - array of nested resources to include. Available values: `targets`

#### Examples:

- `GET /api/v1/sections/planning/categories`

```
[
   {
      "title":"NDC Targets",
      "slug":"ndc_targets",
      "optional":false,
      "order": 0
   },
   {
      "title":"Policies and actions",
      "slug":"policies_and_actions",
      "optional":false,
      "order": 1
   },
   ...
]
```

- `GET /api/v1/sections/planning/categories?includes[]=targets`

```
[
   {
      "title":"NDC Targets",
      "slug":"ndc_targets",
      "optional":false,
      "order": 0,
      "targets":[
         {
            "title":"GHG Target",
            "slug":"ghg_target"
         },
         {
            "title":"Non-GHG Target",
            "slug":"ghg_target"
         }
      ]
   },
   ...
]
```

### `GET /api/v1/sections/:section_slug/categories/:slug`

#### Parameters:
- same as for collection

#### Examples:

- `GET /api/v1/sections/planning/categories/ndc_targets`

```
{
   "title":"NDC Targets",
   "slug":"ndc_targets",
   "optional":false,
   "order": 0
}
```
