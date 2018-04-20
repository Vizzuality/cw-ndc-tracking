# API

## Sections

### `GET /api/v1/sections`

#### Parameters:
- `includes` - array of nested resources to include. Available values: `categories`, `targets`
- `year` - integer, if omitted defaults to current year (applies to nested targets)

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
            "slug":"ndc_targets",
            "optional":false,
            "order":0,
            "active":true
         }
      ]
   }
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
            "optional":false,
            "order":0,
            "active":true,
            "targets":[
               {
                  "title":"GHG Target",
                  "summary":"GHG Target",
                  "slug":"ghg_target",
                  "order":0,
                  "year":2018,
                  "reported_percentage":0,
                  "updated_at":"2018-04-19 11:44:16 +0000"
               },
               {
                  "title":"Non-GHG Target",
                  "summary":"Non-GHG Target",
                  "slug":"non_ghg_target",
                  "order":1,
                  "year":2018,
                  "reported_percentage":0,
                  "updated_at":"2018-04-19 11:44:16 +0000"
               }
            ]
         }
      ]
   }
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
- `year` - integer, if omitted defaults to current year (applies to nested targets)

#### Examples:

- `GET /api/v1/sections/planning/categories`

```
[
   {
      "title":"NDC Targets",
      "slug":"ndc_targets",
      "optional":false,
      "order":0,
      "active":true
   },
   {
      "title":"Policies and actions",
      "slug":"policies_and_actions",
      "optional":false,
      "order":1,
      "active":true
   }
]
```

- `GET /api/v1/sections/planning/categories?includes[]=targets`

```
[
   {
      "title":"NDC Targets",
      "slug":"ndc_targets",
      "optional":false,
      "order":0,
      "active":true,
      "targets":[
         {
            "title":"GHG Target",
            "summary":"GHG Target",
            "slug":"ghg_target",
            "order":0,
            "year":2018,
            "reported_percentage":0,
            "updated_at":"2018-04-19 11:44:16 +0000"
         },
         {
            "title":"Non-GHG Target",
            "summary":"Non-GHG Target",
            "slug":"non_ghg_target",
            "order":1,
            "year":2018,
            "reported_percentage":0,
            "updated_at":"2018-04-19 11:44:16 +0000"
         }
      ]
   }
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
   "order":0,
   "active":true
}
```

## Targets

### `GET /api/v1/sections/:section_slug/categories/:category_slug/targets`

#### Parameters:
- `year` - integer, if omitted defaults to current year

#### Examples:

- `GET /api/v1/sections/planning/categories/ndc_targets/targets`

```
[
   {
      "title":"GHG Target",
      "summary":"GHG Target",
      "slug":"ghg_target",
      "order":0,
      "year":2018,
      "reported_percentage":0,
      "updated_at":"2018-04-19 11:44:16 +0000"
   },
   {
      "title":"Non-GHG Target",
      "summary":"Non-GHG Target",
      "slug":"non_ghg_target",
      "order":1,
      "year":2018,
      "reported_percentage":0,
      "updated_at":"2018-04-19 11:44:16 +0000"
   }
]
```
