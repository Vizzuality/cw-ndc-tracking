# API

## Sections

### `GET /api/v1/sections`

#### Parameters:
- `includes` - array of nested resources to include. Available values: `categories`, `targets`, `indicators`
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

- `/api/v1/sections?includes[]=categories&includes[]=targets&includes[]=indicators`

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
                  "updated_at":"2018-04-19 11:44:16 +0000",
                  "indicators":[
                     {
                        "title":"GHG target type",
                        "slug":"ghg_target_type",
                        "values":[
                           {
                              "type":"textarea",
                              "label":"Value",
                              "value":"Base year target"
                           }
                        ],
                        "order":0,
                        "id":559,
                        "updated_at":"2018-05-01 10:58:18 +0000",
                        "metadata":"TODO"
                     }
                  ]
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
- `includes` - array of nested resources to include. Available values: `targets`, `indicators`
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
         }
      ]
   }
]
```

- `GET /api/v1/sections/planning/categories?includes[]=targets&includes[]=indicators`

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
            "updated_at":"2018-04-19 11:44:16 +0000",
            "indicators":[
               {
                  "title":"GHG target type",
                  "slug":"ghg_target_type",
                  "values":[
                     {
                        "type":"textarea",
                        "label":"Value",
                        "value":"Base year target"
                     }
                  ],
                  "order":0,
                  "id":559,
                  "updated_at":"2018-05-01 10:58:18 +0000",
                  "metadata":"TODO"
               }
            ]
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
- `includes` - array of nested resources to include. Available values: `indicators`
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

- `GET /api/v1/sections/planning/categories/ndc_targets/targets?includes[]=indicators`

```
[
   {
      "title":"GHG Target",
      "summary":"GHG Target",
      "slug":"ghg_target",
      "order":0,
      "year":2018,
      "reported_percentage":0,
      "updated_at":"2018-04-19 11:44:16 +0000",
      "indicators":[
         {
            "title":"GHG target type",
            "slug":"ghg_target_type",
            "values":[
               {
                  "type":"textarea",
                  "label":"Value",
                  "value":"Base year target"
               }
            ],
            "order":0,
            "id":559,
            "updated_at":"2018-05-01 10:58:18 +0000",
            "metadata":"TODO"
         }
      ]
   }
]
```

## Indicators

### `GET /api/v1/sections/:section_slug/categories/:category_slug/targets/:target_slug/indicators`

#### Parameters:
- `year` - integer, if omitted defaults to current year

#### Examples:

- `GET /api/v1/sections/planning/categories/ndc_targets/targets/ghg_target/indicators`

```
[
   {
      "id": 1,
      "title":"Land sector",
      "slug":"land_sector",
      "values":[
         {
            "type":"input",
            "label":"Time series data",
            "hint":"Expects csv format",
            "value":"zonk"
         }
      ],
      "order":1,
      "reported":false,
      "updated_at":"2018-04-30 12:08:12 +0000",
      "metadata":"TODO"
   },
   {
      "id": 2,
      "title":"Transferable emissions under ITMOs",
      "slug":"transferrable_emissions_under_itmos",
      "values":[
         {
            "type":"input",
            "unit":"Gt",
            "label":"Value",
            "value":"zonk"
         },
         {
            "type":"input",
            "label":"Year",
            "value":"zonk"
         }
      ],
      "order":2,
      "reported":false,
      "updated_at":"2018-04-30 12:08:12 +0000",
      "metadata":"TODO"
   }
]
```

### `PATCH /api/v1/sections/:section_slug/categories/:category_slug/targets/:target_slug/indicator/:id`

#### Body

{
   indicator: {
      value: {
         value: 2015, label: 'Year'
      }
   }
}

#### Response

```
{
   "title":"Quantification of GHG target",
   "slug":"quantification_of_ghg_target",
   "values":[
      {
         "type":"input",
         "unit":"Gt",
         "label":"Value",
         "value":20
      },
      {
         "type":"input",
         "label":"Year",
         "value":2018
      }
   ],
   "order":3,
   "id":620,
   "reported":true,
   "updated_at":"2018-05-04 13:15:16 +0000",
   "metadata":"TODO"
}
```

#### Example

curl "http://localhost:3000/api/v1/sections/tracking/categories/ndc_targets/targets/ghg_target/indicators/620" -X PATCH -d '{"indicator": {"value": {"value": 20, "label": "Value"}}}' -H "Content-Type: application/json" -H "Accept: application/json" -H "X-User-Email: user@example.com" -H "X-User-Token: 5xafy8w2RZUygXa_Bt_K"

