define({ "api": [
  {
    "type": "post",
    "url": "/api/v1/products/create",
    "title": "Create blog",
    "version": "0.0.1",
    "group": "Create",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>type of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "section_title",
            "description": "<p>section_title of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mean_rating",
            "description": "<p>mean_rating of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "best_rating",
            "description": "<p>best_rating of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "worst_rating",
            "description": "<p>worst_rating of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "rating_count",
            "description": "<p>rating_count of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "reviews_count",
            "description": "<p>reviews_count of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Band_Color",
            "description": "<p>Band_Color of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Band_Material",
            "description": "<p>Band_Material of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Watch_Movement_Type",
            "description": "<p>Watch_Movement_Type of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Watch_Display_Type",
            "description": "<p>Watch_Display_Type of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "blogBody",
            "description": "<p>blogBody of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Suitable",
            "description": "<p>Suitable of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Display_Size",
            "description": "<p>Display_Size of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Resolution",
            "description": "<p>Resolution of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Resolution_Type",
            "description": "<p>Resolution_Type of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "GPU",
            "description": "<p>GPU of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Display_Type",
            "description": "<p>Display_Type of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Display_Colors",
            "description": "<p>Display_Colors of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Operating_System",
            "description": "<p>Operating_System of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Processor_Type",
            "description": "<p>Processor_Type of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Processor_Core",
            "description": "<p>Processor_Core of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Primary_Clock_Speed",
            "description": "<p>Primary_Clock_Speed of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Internal_Storage",
            "description": "<p>Internal_Storage of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "RAM",
            "description": "<p>RAM of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Total_Memory",
            "description": "<p>Total_Memory of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Expandable_Storage",
            "description": "<p>Expandable_Storage of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Supported_Memory_Card_Type",
            "description": "<p>Supported_Memory_Card_Type of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Memory_Card_Slot_Type",
            "description": "<p>Memory_Card_Slot_Type of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Network_Type",
            "description": "<p>Network_Type of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Supported_Networks",
            "description": "<p>Supported_Networks of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "threeG",
            "description": "<p>threeG of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Bluetooth_Support",
            "description": "<p>Bluetooth_Support of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Wi_Fi",
            "description": "<p>Wi_Fi of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Audio_Jack",
            "description": "<p>Audio_Jack of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Audio_Formats",
            "description": "<p>Audio_Formats of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Video_Formats",
            "description": "<p>Video_Formats of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "FM_Radio",
            "description": "<p>FM_Radio of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "FM_Radio_Recording",
            "description": "<p>FM_Radio_Recording of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Primary_Camera_Available",
            "description": "<p>Primary_Camera_Available of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Primary_Camera",
            "description": "<p>Primary_Camera of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Primary_Camera_Features",
            "description": "<p>Primary_Camera_Features of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "econdary_Camera_Available",
            "description": "<p>Secondary_Camera_Available of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Secondary_Camera",
            "description": "<p>Secondary_Camera of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Flash",
            "description": "<p>Flash of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Full_HD_Recording",
            "description": "<p>Full_HD_Recording of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Frame_Rate",
            "description": "<p>Frame_Rate of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Battery_Capacity",
            "description": "<p>Battery_Capacity of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Width",
            "description": "<p>Width of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Height",
            "description": "<p>Height of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Depth",
            "description": "<p>Depth of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Weight",
            "description": "<p>Weight of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Bought_amount",
            "description": "<p>Bought_amount of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "users",
            "description": "<p>users of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "number_of_times",
            "description": "<p>number_of_times of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Warranty_Summary",
            "description": "<p>Warranty_Summary of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Gurantee_Summary",
            "description": "<p>Gurantee_Summary of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>source of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>desc of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "brand",
            "description": "<p>brand of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "price",
            "description": "<p>price of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "currency",
            "description": "<p>currency of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "offer_price",
            "description": "<p>offer_price of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "model",
            "description": "<p>model of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "manufacturer",
            "description": "<p>manufacturer of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "in_stock",
            "description": "<p>in_stock of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "on_sale",
            "description": "<p>on_sale of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Item_Weight",
            "description": "<p>Item_Weight of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "images",
            "description": "<p>images of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "language",
            "description": "<p>language of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Last_bought",
            "description": "<p>Last_bought of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Browse_Type",
            "description": "<p>Browse_Type of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "categories",
            "description": "<p>categories of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Band_Colour",
            "description": "<p>Band_Color of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Dial_Colour",
            "description": "<p>Dial_Colour of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "SIM",
            "description": "<p>SIM of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Hybrid_Sim_Slot",
            "description": "<p>Hybrid_Sim_Slot of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Touchscreen",
            "description": "<p>Touchscreen of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "OTG_Compatible",
            "description": "<p>OTG_Compatible of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Smartphone",
            "description": "<p>Smartphone of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "SIM_Size",
            "description": "<p>SIM_Size of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Removable_Battery",
            "description": "<p>Removable_Battery of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Keypad",
            "description": "<p>Keypad of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Graphics_PPI",
            "description": "<p>Graphics_PPI of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "Added_to_cart",
            "description": "<p>Added_to_cart of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Added_to_cart_by",
            "description": "<p>Added_to_cart_by of the product passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n      \"error\": false,\n      \"message\": \"id: ${id} product's info in now in the database\",\n      \"status\": 200,\n      \"data\": [\n      {\n        basic_info: {\n          url: 'string',\n          uuid: 'string',\n          source: {\n            site: 'string',\n            site_section: 'string',\n            section_title: 'string',\n            country: 'string'\n          },\n          name: 'string',\n          description: {\n            Band_Color: 'string',\n            Band_Material: 'string',\n\n            Watch_Movement_Type: 'string',\n            Watch_Display_Type: 'string',\n\n            Suitable: 'string'\n          },\n          brand: 'string',\n          price: 'string',\n          currency: 'string',\n          offer_price: 'string',\n          model: 'string',\n          manufacturer: 'string',\n          in_stock: 'string',\n          on_sale: 'string',\n          product_id: 'string',\n          Clasp: 'string',\n          Item_Weight: 'string',\n          rating_desc: {\n            mean_rating: number,\n            best_rating: number,\n            worst_rating: number,\n            rating_count: number,\n            reviews_count: number\n          },\n          images: ['default url'],\n          language: 'string',\n          Date_first_available_at_buytoo: 'date',\n          Last_bought: 'date'\n        },\n        Band_Colour: 'string',\n        Display_Type: 'string',\n        Dial_Colour: 'string',\n        categories: ['default'],\n        Browse_Type: 'string',\n        SIM: 'string',\n\n        Hybrid_Sim_Slot: 'string',\n        Touchscreen: 'string',\n        OTG_Compatible: 'string',\n        Display_Features: {\n          Display_Size: 'string',\n          Resolution: 'string',\n          Resolution_Type: 'string',\n          GPU: 'string',\n          Display_Type: 'string',\n          Display_Colors: 'string'\n        },\n        Os_and_Processor_Features: {\n          Operating_System: 'string',\n          Processor_Type: 'string',\n          Processor_Core: 'string',\n          Primary_Clock_Speed: 'string'\n        },\n        Memory_and_Storage_Features: {\n          Internal_Storage: 'string',\n          RAM: 'string',\n          Total_Memory: 'string',\n          Expandable_Storage: 'string',\n          Supported_Memory_Card_Type: 'string',\n          Memory_Card_Slot_Type: 'string'\n        },\n        Camera_Features: {\n          Primary_Camera_Available: 'string',\n          Primary_Camera: 'string',\n          Primary_Camera_Features: ['default'],\n          Secondary_Camera_Available: 'string',\n          Secondary_Camera: 'string',\n          Flash: 'string',\n          Full_HD_Recording: 'string',\n          Frame_Rate: 'string'\n        },\n        Connectivity_Features: {\n          Network_Type: ['default'],\n          Supported_Networks: ['default'],\n          threeG: 'string',\n          Bluetooth_Support: 'string',\n          Bluetooth_Version: number,\n          Wi_Fi: 'string',\n          Audio_Jack: number\n        },\n        Multimedia_Features: {\n          FM_Radio: 'string',\n          FM_Radio_Recording: 'string',\n          Audio_Formats: ['default'],\n          Video_Formats: ['default']\n        },\n        Battery_and_Power_Features: {\n          Battery_Capacity: 'string'\n        },\n        Dimensions: {\n          Width: 'string',\n          Height: 'string',\n          Depth: 'string',\n          Weight: 'string'\n        },\n        Smartphone: 'string',\n        SIM_Size: 'string',\n        Removable_Battery: 'string',\n        Keypad: 'string',\n        Graphics_PPI: 'string',\n        Added_to_cart: false,\n        Added_to_cart_by: ['user'],\n        Bought_amount: number,\n        Bought_by: {\n          users: ['default'],\n          number_of_times: [number]\n        },\n        Warranty_and_Gurantee: {\n          Warranty_Summary: 'string',\n          Gurantee_Summary: 'string'\n        }\n      }]\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error - Response:",
          "content": "HTTP/1.1 500 internal server error\n  {\n    \"error\": true,\n    \"message\": \"Failed to create Product info\",\n    \"status\": 500,\n    \"data\": null\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "route/ecom.js",
    "groupTitle": "Create",
    "name": "PostApiV1ProductsCreate"
  },
  {
    "type": "post",
    "url": "/delete/categories/:categories",
    "title": "Delete product infos with a certain categories",
    "version": "0.0.1",
    "group": "Delete",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "categories",
            "description": "<p>The categories should be passed as the URL parameter. give multiple input placing '_' inbetween.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success - Response:",
          "content": " HTTP/1.1 200 OK\n{\n      \"error\": false,\n      \"message\": \"products' infos has been deleted\",\n      \"status\": 200,\n      \"data\":  []\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error - Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"error\": true,\n    \"message\": \"product info can not be found\",\n    \"status\": 404,\n    \"data\": null\n  }",
          "type": "json"
        },
        {
          "title": "Error - Response:",
          "content": "HTTP/1.1 500 internal server error\n{\n    \"error\": true,\n    \"message\": \"internal server error\",\n    \"status\": 500,\n    \"data\": null\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "route/ecom.js",
    "groupTitle": "Delete",
    "name": "PostDeleteCategoriesCategories"
  },
  {
    "type": "post",
    "url": "/delete/:product_id",
    "title": "Delete product infos with a certain product_id",
    "version": "0.0.1",
    "group": "Delete",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "product_id",
            "description": "<p>The product_id should be passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success - Response:",
          "content": " HTTP/1.1 200 OK\n{\n      \"error\": false,\n      \"message\": \"${req.params.product_id} id product info doc has been deleted\",\n      \"status\": 200,\n      \"data\":  []\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error - Response:",
          "content": "Error - Response:\nHTTP/1.1 404 Not Found\n{\n    \"error\": true,\n    \"message\": \"product info can not be found\",\n    \"status\": 404,\n    \"data\": null\n  }",
          "type": "json"
        },
        {
          "title": "Error - Response:",
          "content": "HTTP/1.1 500 internal server error\n{\n    \"error\": true,\n    \"message\": \"Failed to delete the doc\",\n    \"status\": 500,\n    \"data\": null\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "route/ecom.js",
    "groupTitle": "Delete",
    "name": "PostDeleteProduct_id"
  },
  {
    "type": "put",
    "url": "/edit/:product_id",
    "title": "Edit product infos with a certain product_id",
    "version": "0.0.1",
    "group": "Edit",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "product_id",
            "description": "<p>The product_id should be passed as the URL parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>type of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of the product passed as a body parameter.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Browse_Type",
            "description": "<p>Browse_Type of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Band_Colour",
            "description": "<p>Band_Color of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Display_Type",
            "description": "<p>Display_Type of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Dial_Colour",
            "description": "<p>Dial_Colour of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "SIM",
            "description": "<p>SIM of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Hybrid_Sim_Slot",
            "description": "<p>Hybrid_Sim_Slot of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Touchscreen",
            "description": "<p>Touchscreen of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "OTG_Compatible",
            "description": "<p>OTG_Compatible of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Smartphone",
            "description": "<p>Smartphone of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "SIM_Size",
            "description": "<p>SIM_Size of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Removable_Battery",
            "description": "<p>Removable_Battery of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Keypad",
            "description": "<p>Keypad of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Graphics_PPI",
            "description": "<p>Graphics_PPI of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "Added_to_cart",
            "description": "<p>Added_to_cart of the product passed as a body parameter</p>"
          }
        ],
        "basic_response": [
          {
            "group": "basic_response",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.</p>"
          },
          {
            "group": "basic_response",
            "type": "String",
            "optional": false,
            "field": "brand",
            "description": "<p>brand of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.</p>"
          },
          {
            "group": "basic_response",
            "type": "String",
            "optional": false,
            "field": "price",
            "description": "<p>price of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.</p>"
          },
          {
            "group": "basic_response",
            "type": "String",
            "optional": false,
            "field": "currency",
            "description": "<p>currency of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.</p>"
          },
          {
            "group": "basic_response",
            "type": "String",
            "optional": false,
            "field": "offer_price",
            "description": "<p>offer_price of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.</p>"
          },
          {
            "group": "basic_response",
            "type": "String",
            "optional": false,
            "field": "model",
            "description": "<p>model of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.</p>"
          },
          {
            "group": "basic_response",
            "type": "String",
            "optional": false,
            "field": "manufacturer",
            "description": "<p>manufacturer of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.</p>"
          },
          {
            "group": "basic_response",
            "type": "String",
            "optional": false,
            "field": "in_stock",
            "description": "<p>in_stock of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.</p>"
          },
          {
            "group": "basic_response",
            "type": "String",
            "optional": false,
            "field": "on_sale",
            "description": "<p>on_sale of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.</p>"
          },
          {
            "group": "basic_response",
            "type": "String",
            "optional": false,
            "field": "Item_Weight",
            "description": "<p>Item_Weight of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.</p>"
          },
          {
            "group": "basic_response",
            "type": "String",
            "optional": false,
            "field": "language",
            "description": "<p>language of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.</p>"
          },
          {
            "group": "basic_response",
            "type": "String",
            "optional": false,
            "field": "Last_bought",
            "description": "<p>Last_bought of the product passed as a body parameter.  Param group will be attached before the parameter as an Object key sequence.</p>"
          }
        ],
        "basic_info['source']": [
          {
            "group": "basic_info['source']",
            "type": "String",
            "optional": false,
            "field": "section_title",
            "description": "<p>section_title of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.</p>"
          },
          {
            "group": "basic_info['source']",
            "type": "String",
            "optional": false,
            "field": "mean_rating",
            "description": "<p>mean_rating of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.</p>"
          }
        ],
        "basic_info['rating_desc']": [
          {
            "group": "basic_info['rating_desc']",
            "type": "String",
            "optional": false,
            "field": "best_rating",
            "description": "<p>best_rating of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.</p>"
          },
          {
            "group": "basic_info['rating_desc']",
            "type": "String",
            "optional": false,
            "field": "worst_rating",
            "description": "<p>worst_rating of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.</p>"
          },
          {
            "group": "basic_info['rating_desc']",
            "type": "String",
            "optional": false,
            "field": "rating_count",
            "description": "<p>rating_count of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.</p>"
          },
          {
            "group": "basic_info['rating_desc']",
            "type": "String",
            "optional": false,
            "field": "reviews_count",
            "description": "<p>reviews_count of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.</p>"
          }
        ],
        "basic_info['description']": [
          {
            "group": "basic_info['description']",
            "type": "String",
            "optional": false,
            "field": "Band_Color",
            "description": "<p>Band_Color of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.</p>"
          },
          {
            "group": "basic_info['description']",
            "type": "String",
            "optional": false,
            "field": "Band_Material",
            "description": "<p>Band_Material of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.</p>"
          },
          {
            "group": "basic_info['description']",
            "type": "String",
            "optional": false,
            "field": "Watch_Movement_Type",
            "description": "<p>Watch_Movement_Type of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.</p>"
          },
          {
            "group": "basic_info['description']",
            "type": "String",
            "optional": false,
            "field": "Watch_Display_Type",
            "description": "<p>Watch_Display_Type of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.</p>"
          },
          {
            "group": "basic_info['description']",
            "type": "String",
            "optional": false,
            "field": "Suitable",
            "description": "<p>Suitable of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.</p>"
          }
        ],
        "Display_Features": [
          {
            "group": "Display_Features",
            "type": "String",
            "optional": false,
            "field": "Display_Size",
            "description": "<p>Display_Size of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.</p>"
          },
          {
            "group": "Display_Features",
            "type": "String",
            "optional": false,
            "field": "Resolution",
            "description": "<p>Resolution of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.</p>"
          },
          {
            "group": "Display_Features",
            "type": "String",
            "optional": false,
            "field": "Resolution_Type",
            "description": "<p>Resolution_Type of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.</p>"
          },
          {
            "group": "Display_Features",
            "type": "String",
            "optional": false,
            "field": "GPU",
            "description": "<p>GPU of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.</p>"
          },
          {
            "group": "Display_Features",
            "type": "String",
            "optional": false,
            "field": "Display_Type",
            "description": "<p>Display_Type of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.</p>"
          },
          {
            "group": "Display_Features",
            "type": "String",
            "optional": false,
            "field": "Display_Colors",
            "description": "<p>Display_Colors of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.</p>"
          }
        ],
        "Os_and_Processor_Features": [
          {
            "group": "Os_and_Processor_Features",
            "type": "String",
            "optional": false,
            "field": "Operating_System",
            "description": "<p>Operating_System of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.</p>"
          },
          {
            "group": "Os_and_Processor_Features",
            "type": "String",
            "optional": false,
            "field": "Processor_Type",
            "description": "<p>Processor_Type of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.</p>"
          },
          {
            "group": "Os_and_Processor_Features",
            "type": "String",
            "optional": false,
            "field": "Processor_Core",
            "description": "<p>Processor_Core of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.</p>"
          },
          {
            "group": "Os_and_Processor_Features",
            "type": "String",
            "optional": false,
            "field": "Primary_Clock_Speed",
            "description": "<p>Primary_Clock_Speed of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.</p>"
          }
        ],
        "Memory_and_Storage_Features": [
          {
            "group": "Memory_and_Storage_Features",
            "type": "String",
            "optional": false,
            "field": "Internal_Storage",
            "description": "<p>Internal_Storage of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.</p>"
          },
          {
            "group": "Memory_and_Storage_Features",
            "type": "String",
            "optional": false,
            "field": "RAM",
            "description": "<p>RAM of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.</p>"
          },
          {
            "group": "Memory_and_Storage_Features",
            "type": "String",
            "optional": false,
            "field": "Total_Memory",
            "description": "<p>Total_Memory of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.</p>"
          },
          {
            "group": "Memory_and_Storage_Features",
            "type": "String",
            "optional": false,
            "field": "Expandable_Storage",
            "description": "<p>Expandable_Storage of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.</p>"
          },
          {
            "group": "Memory_and_Storage_Features",
            "type": "String",
            "optional": false,
            "field": "Supported_Memory_Card_Type",
            "description": "<p>Supported_Memory_Card_Type of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.</p>"
          },
          {
            "group": "Memory_and_Storage_Features",
            "type": "String",
            "optional": false,
            "field": "Memory_Card_Slot_Type",
            "description": "<p>Memory_Card_Slot_Type of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.</p>"
          }
        ],
        "Connectivity_Features": [
          {
            "group": "Connectivity_Features",
            "type": "String",
            "optional": false,
            "field": "threeG",
            "description": "<p>threeG of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.</p>"
          },
          {
            "group": "Connectivity_Features",
            "type": "String",
            "optional": false,
            "field": "Bluetooth_Support",
            "description": "<p>Bluetooth_Support of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.</p>"
          },
          {
            "group": "Connectivity_Features",
            "type": "String",
            "optional": false,
            "field": "Wi_Fi",
            "description": "<p>Wi_Fi of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.</p>"
          },
          {
            "group": "Connectivity_Features",
            "type": "Number",
            "optional": false,
            "field": "Audio_Jack",
            "description": "<p>Audio_Jack of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.</p>"
          }
        ],
        "Multimedia_Features": [
          {
            "group": "Multimedia_Features",
            "type": "String",
            "optional": false,
            "field": "FM_Radio",
            "description": "<p>FM_Radio of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.</p>"
          },
          {
            "group": "Multimedia_Features",
            "type": "String",
            "optional": false,
            "field": "FM_Radio_Recording",
            "description": "<p>FM_Radio_Recording of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.</p>"
          }
        ],
        "Camera_Features": [
          {
            "group": "Camera_Features",
            "type": "String",
            "optional": false,
            "field": "Primary_Camera_Available",
            "description": "<p>Primary_Camera_Available of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.</p>"
          },
          {
            "group": "Camera_Features",
            "type": "String",
            "optional": false,
            "field": "Primary_Camera",
            "description": "<p>Primary_Camera of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.</p>"
          },
          {
            "group": "Camera_Features",
            "type": "String",
            "optional": false,
            "field": "Secondary_Camera_Available",
            "description": "<p>Secondary_Camera_Available of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.</p>"
          },
          {
            "group": "Camera_Features",
            "type": "String",
            "optional": false,
            "field": "Secondary_Camera",
            "description": "<p>Secondary_Camera of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.</p>"
          },
          {
            "group": "Camera_Features",
            "type": "String",
            "optional": false,
            "field": "Flash",
            "description": "<p>Flash of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.</p>"
          },
          {
            "group": "Camera_Features",
            "type": "String",
            "optional": false,
            "field": "Full_HD_Recording",
            "description": "<p>Full_HD_Recording of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.</p>"
          },
          {
            "group": "Camera_Features",
            "type": "String",
            "optional": false,
            "field": "Frame_Rate",
            "description": "<p>Frame_Rate of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.</p>"
          }
        ],
        "Battery_and_Power_Features": [
          {
            "group": "Battery_and_Power_Features",
            "type": "String",
            "optional": false,
            "field": "Battery_Capacity",
            "description": "<p>Battery_Capacity of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.</p>"
          }
        ],
        "Dimensions": [
          {
            "group": "Dimensions",
            "type": "String",
            "optional": false,
            "field": "Width",
            "description": "<p>Width of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.</p>"
          },
          {
            "group": "Dimensions",
            "type": "String",
            "optional": false,
            "field": "Height",
            "description": "<p>Height of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.</p>"
          },
          {
            "group": "Dimensions",
            "type": "String",
            "optional": false,
            "field": "Depth",
            "description": "<p>Depth of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.</p>"
          },
          {
            "group": "Dimensions",
            "type": "String",
            "optional": false,
            "field": "Weight",
            "description": "<p>Weight of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.</p>"
          }
        ],
        "Warranty_and_Gurantee": [
          {
            "group": "Warranty_and_Gurantee",
            "type": "String",
            "optional": false,
            "field": "Warranty_Summary",
            "description": "<p>Warranty_Summary of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.</p>"
          },
          {
            "group": "Warranty_and_Gurantee",
            "type": "String",
            "optional": false,
            "field": "Gurantee_Summary",
            "description": "<p>Gurantee_Summary of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success - Response:",
          "content": " HTTP/1.1 200 OK\n{\n      \"error\": false,\n      \"message\": \"products' infos has been updated\",\n      \"status\": 200,\n      \"data\": \n       {\n        \"n\": 1,\n        \"nModified\": 1,\n        \"ok\": 1\n    }\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error - Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"error\": true,\n    \"message\": \"product info can not be found\",\n    \"status\": 404,\n    \"data\": null\n  }",
          "type": "json"
        },
        {
          "title": "Error - Response:",
          "content": "HTTP/1.1 500 internal server error\n{\n    \"error\": true,\n    \"message\": \"Failed to edit the doc\",\n    \"status\": 500,\n    \"data\": null\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "route/ecom.js",
    "groupTitle": "Edit",
    "name": "PutEditProduct_id"
  },
  {
    "type": "put",
    "url": "/update/added_to_cart/:product_id",
    "title": "Edit added_to_cart of product infos with a certain product_id",
    "version": "0.0.1",
    "group": "Edit",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "product_id",
            "description": "<p>The product_id should be passed as the URL parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "Added_to_cart",
            "description": "<p>Added_to_cart of the product passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success - Response:",
          "content": " HTTP/1.1 200 OK\n{\n      \"error\": false,\n      \"message\": \"products' infos has been updated\",\n      \"status\": 200,\n      \"data\": \n       {\n        \"n\": 1,\n        \"nModified\": 1,\n        \"ok\": 1\n    }\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error - Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"error\": true,\n    \"message\": \"product info can not be found\",\n    \"status\": 404,\n    \"data\": null\n  }",
          "type": "json"
        },
        {
          "title": "Error - Response:",
          "content": "HTTP/1.1 500 internal server error\n{\n    \"error\": true,\n    \"message\": \"internal server error\",\n    \"status\": 500,\n    \"data\": null\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "route/ecom.js",
    "groupTitle": "Edit",
    "name": "PutUpdateAdded_to_cartProduct_id"
  },
  {
    "type": "put",
    "url": "/update/offer_price/:product_id",
    "title": "Edit offer_price of product infos with a certain product_id",
    "version": "0.0.1",
    "group": "Edit",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "product_id",
            "description": "<p>The product_id should be passed as the URL parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "offer_price",
            "description": "<p>offer_price of the product passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success - Response:",
          "content": " HTTP/1.1 200 OK\n{\n      \"error\": false,\n      \"message\": \"products' infos has been updated\",\n      \"status\": 200,\n      \"data\": \n       {\n        \"n\": 1,\n        \"nModified\": 1,\n        \"ok\": 1\n    }\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error - Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"error\": true,\n    \"message\": \"product info can not be found\",\n    \"status\": 404,\n    \"data\": null\n  }",
          "type": "json"
        },
        {
          "title": "Error - Response:",
          "content": "HTTP/1.1 500 internal server error\n{\n    \"error\": true,\n    \"message\": \"internal server error\",\n    \"status\": 500,\n    \"data\": null\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "route/ecom.js",
    "groupTitle": "Edit",
    "name": "PutUpdateOffer_priceProduct_id"
  },
  {
    "type": "put",
    "url": "/update/user_bought/:product_id",
    "title": "Edit added_to_cart of product infos with a certain product_id",
    "version": "0.0.1",
    "group": "Edit",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "accessor",
            "description": "<p>accessor passed as a body parameter(if the value is 'user' only registered user can access and if value is 'admin' authToken is needed)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "product_id",
            "description": "<p>The product_id should be passed as the URL parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "users",
            "description": "<p>users of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "number_of_times",
            "description": "<p>number_of_times of the product passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success - Response:",
          "content": " HTTP/1.1 200 OK\n{\n      \"error\": false,\n      \"message\": \"products' infos has been updated\",\n      \"status\": 200,\n      \"data\": \n       {\n        \"n\": 1,\n        \"nModified\": 1,\n        \"ok\": 1\n    }\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error - Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"error\": true,\n    \"message\": \"product info can not be found\",\n    \"status\": 404,\n    \"data\": null\n  }",
          "type": "json"
        },
        {
          "title": "Error - Response:",
          "content": "Error - Response:\nHTTP/1.1 500 internal server error\n{\n    \"error\": true,\n    \"message\": \"internal server error\",\n    \"status\": 500,\n    \"data\": null\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "route/ecom.js",
    "groupTitle": "Edit",
    "name": "PutUpdateUser_boughtProduct_id"
  },
  {
    "type": "get",
    "url": "/api/v1/products/all",
    "title": "Get all Product info docs",
    "version": "0.0.1",
    "group": "Read",
    "success": {
      "examples": [
        {
          "title": "Success - Response:",
          "content": " Success - Response:\nHTTP/1.1 200 OK\n   {\n     \"error\": false,\n     \"message\": \"All product infos found\",\n     \"status\": 200,\n     \"data\": [\n     {\n       basic_info: {\n         url: 'string',\n         uuid: 'string',\n         source: {\n           site: 'string',\n           site_section: 'string',\n           section_title: 'string',\n           country: 'string'\n         },\n         name: 'string',\n         description: {\n           Band_Color: 'string',\n           Band_Material: 'string',\n\n           Watch_Movement_Type: 'string',\n           Watch_Display_Type: 'string',\n\n           Suitable: 'string'\n         },\n         brand: 'string',\n         price: 'string',\n         currency: 'string',\n         offer_price: 'string',\n         model: 'string',\n         manufacturer: 'string',\n         in_stock: 'string',\n         on_sale: 'string',\n         product_id: 'string',\n         Clasp: 'string',\n         Item_Weight: 'string',\n         rating_desc: {\n           mean_rating: number,\n           best_rating: number,\n           worst_rating: number,\n           rating_count: number,\n           reviews_count: number\n         },\n         images: ['default url'],\n         language: 'string',\n         Date_first_available_at_buytoo: 'date',\n         Last_bought: 'date'\n       },\n       Band_Colour: 'string',\n       Display_Type: 'string',\n       Dial_Colour: 'string',\n       categories: ['default'],\n       Browse_Type: 'string',\n       SIM: 'string',\n\n       Hybrid_Sim_Slot: 'string',\n       Touchscreen: 'string',\n       OTG_Compatible: 'string',\n       Display_Features: {\n         Display_Size: 'string',\n         Resolution: 'string',\n         Resolution_Type: 'string',\n         GPU: 'string',\n         Display_Type: 'string',\n         Display_Colors: 'string'\n       },\n       Os_and_Processor_Features: {\n         Operating_System: 'string',\n         Processor_Type: 'string',\n         Processor_Core: 'string',\n         Primary_Clock_Speed: 'string'\n       },\n       Memory_and_Storage_Features: {\n         Internal_Storage: 'string',\n         RAM: 'string',\n         Total_Memory: 'string',\n         Expandable_Storage: 'string',\n         Supported_Memory_Card_Type: 'string',\n         Memory_Card_Slot_Type: 'string'\n       },\n       Camera_Features: {\n         Primary_Camera_Available: 'string',\n         Primary_Camera: 'string',\n         Primary_Camera_Features: ['default'],\n         Secondary_Camera_Available: 'string',\n         Secondary_Camera: 'string',\n         Flash: 'string',\n         Full_HD_Recording: 'string',\n         Frame_Rate: 'string'\n       },\n       Connectivity_Features: {\n         Network_Type: ['default'],\n         Supported_Networks: ['default'],\n         threeG: 'string',\n         Bluetooth_Support: 'string',\n         Bluetooth_Version: number,\n         Wi_Fi: 'string',\n         Audio_Jack: number\n       },\n       Multimedia_Features: {\n         FM_Radio: 'string',\n         FM_Radio_Recording: 'string',\n         Audio_Formats: ['default'],\n         Video_Formats: ['default']\n       },\n       Battery_and_Power_Features: {\n         Battery_Capacity: 'string'\n       },\n       Dimensions: {\n         Width: 'string',\n         Height: 'string',\n         Depth: 'string',\n         Weight: 'string'\n       },\n       Smartphone: 'string',\n       SIM_Size: 'string',\n       Removable_Battery: 'string',\n       Keypad: 'string',\n       Graphics_PPI: 'string',\n       Added_to_cart: false,\n       Added_to_cart_by: ['user'],\n       Bought_amount: number,\n       Bought_by: {\n         users: ['default'],\n         number_of_times: [number]\n       },\n       Warranty_and_Gurantee: {\n         Warranty_Summary: 'string',\n         Gurantee_Summary: 'string'\n       }\n     },\n     {......}\n     ,......]\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error - Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"error\": true,\n    \"message\": \"product info can not be found\",\n    \"status\": 404,\n    \"data\": null\n  }",
          "type": "json"
        },
        {
          "title": "Error - Response:",
          "content": "HTTP/1.1 500 internal server error\n{\n    \"error\": true,\n    \"message\": \"internal server error\",\n    \"status\": 500,\n    \"data\": null\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "route/ecom.js",
    "groupTitle": "Read",
    "name": "GetApiV1ProductsAll"
  },
  {
    "type": "get",
    "url": "/view/product_id/:categories",
    "title": "Get   product infos based on same category",
    "version": "0.0.1",
    "group": "Read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "categories",
            "description": "<p>The categories should be passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success - Response:",
          "content": " HTTP/1.1 200 OK\n{\n      \"error\": false,\n      \"message\": \"products' infos has been found\",\n      \"status\": 200,\n      \"data\": \n      [{\n        basic_info: {\n          url: 'string',\n          uuid: 'string',\n          source: {\n            site: 'string',\n            site_section: 'string',\n            section_title: 'string',\n            country: 'string'\n          },\n          name: 'string',\n          description: {\n            Band_Color: 'string',\n            Band_Material: 'string',\n\n            Watch_Movement_Type: 'string',\n            Watch_Display_Type: 'string',\n\n            Suitable: 'string'\n          },\n          brand: 'string',\n          price: 'string',\n          currency: 'string',\n          offer_price: 'string',\n          model: 'string',\n          manufacturer: 'string',\n          in_stock: 'string',\n          on_sale: 'string',\n          product_id: 'string',\n          Clasp: 'string',\n          Item_Weight: 'string',\n          rating_desc: {\n            mean_rating: number,\n            best_rating: number,\n            worst_rating: number,\n            rating_count: number,\n            reviews_count: number\n          },\n          images: ['default url'],\n          language: 'string',\n          Date_first_available_at_buytoo: 'date',\n          Last_bought: 'date'\n        },\n        Band_Colour: 'string',\n        Display_Type: 'string',\n        Dial_Colour: 'string',\n        categories: ['default'],\n        Browse_Type: 'string',\n        SIM: 'string',\n\n        Hybrid_Sim_Slot: 'string',\n        Touchscreen: 'string',\n        OTG_Compatible: 'string',\n        Display_Features: {\n          Display_Size: 'string',\n          Resolution: 'string',\n          Resolution_Type: 'string',\n          GPU: 'string',\n          Display_Type: 'string',\n          Display_Colors: 'string'\n        },\n        Os_and_Processor_Features: {\n          Operating_System: 'string',\n          Processor_Type: 'string',\n          Processor_Core: 'string',\n          Primary_Clock_Speed: 'string'\n        },\n        Memory_and_Storage_Features: {\n          Internal_Storage: 'string',\n          RAM: 'string',\n          Total_Memory: 'string',\n          Expandable_Storage: 'string',\n          Supported_Memory_Card_Type: 'string',\n          Memory_Card_Slot_Type: 'string'\n        },\n        Camera_Features: {\n          Primary_Camera_Available: 'string',\n          Primary_Camera: 'string',\n          Primary_Camera_Features: ['default'],\n          Secondary_Camera_Available: 'string',\n          Secondary_Camera: 'string',\n          Flash: 'string',\n          Full_HD_Recording: 'string',\n          Frame_Rate: 'string'\n        },\n        Connectivity_Features: {\n          Network_Type: ['default'],\n          Supported_Networks: ['default'],\n          threeG: 'string',\n          Bluetooth_Support: 'string',\n          Bluetooth_Version: number,\n          Wi_Fi: 'string',\n          Audio_Jack: number\n        },\n        Multimedia_Features: {\n          FM_Radio: 'string',\n          FM_Radio_Recording: 'string',\n          Audio_Formats: ['default'],\n          Video_Formats: ['default']\n        },\n        Battery_and_Power_Features: {\n          Battery_Capacity: 'string'\n        },\n        Dimensions: {\n          Width: 'string',\n          Height: 'string',\n          Depth: 'string',\n          Weight: 'string'\n        },\n        Smartphone: 'string',\n        SIM_Size: 'string',\n        Removable_Battery: 'string',\n        Keypad: 'string',\n        Graphics_PPI: 'string',\n        Added_to_cart: false,\n        Added_to_cart_by: ['user'],\n        Bought_amount: number,\n        Bought_by: {\n          users: ['default'],\n          number_of_times: [number]\n        },\n        Warranty_and_Gurantee: {\n          Warranty_Summary: 'string',\n          Gurantee_Summary: 'string'\n        }\n      },{....},....]\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error - Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"error\": true,\n    \"message\": \"product info can not be found\",\n    \"status\": 404,\n    \"data\": null\n  }",
          "type": "json"
        },
        {
          "title": "Error - Response:",
          "content": "HTTP/1.1 500 internal server error\n{\n    \"error\": true,\n    \"message\": \"internal server error\",\n    \"status\": 500,\n    \"data\": null\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "route/ecom.js",
    "groupTitle": "Read",
    "name": "GetViewProduct_idCategories"
  },
  {
    "type": "get",
    "url": "/view/product_id/:product_id",
    "title": "Get a single product info of a certain product_id",
    "version": "0.0.1",
    "group": "Read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "product_id",
            "description": "<p>The product_id should be passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success - Response:",
          "content": " HTTP/1.1 200 OK\n{\n      \"error\": false,\n      \"message\": \" infos has been updated\",\n      \"status\": 200,\n      \"data\": \n      {\n        basic_info: {\n          url: 'string',\n          uuid: 'string',\n          source: {\n            site: 'string',\n            site_section: 'string',\n            section_title: 'string',\n            country: 'string'\n          },\n          name: 'string',\n          description: {\n            Band_Color: 'string',\n            Band_Material: 'string',\n\n            Watch_Movement_Type: 'string',\n            Watch_Display_Type: 'string',\n\n            Suitable: 'string'\n          },\n          brand: 'string',\n          price: 'string',\n          currency: 'string',\n          offer_price: 'string',\n          model: 'string',\n          manufacturer: 'string',\n          in_stock: 'string',\n          on_sale: 'string',\n          product_id: 'string',\n          Clasp: 'string',\n          Item_Weight: 'string',\n          rating_desc: {\n            mean_rating: number,\n            best_rating: number,\n            worst_rating: number,\n            rating_count: number,\n            reviews_count: number\n          },\n          images: ['default url'],\n          language: 'string',\n          Date_first_available_at_buytoo: 'date',\n          Last_bought: 'date'\n        },\n        Band_Colour: 'string',\n        Display_Type: 'string',\n        Dial_Colour: 'string',\n        categories: ['default'],\n        Browse_Type: 'string',\n        SIM: 'string',\n\n        Hybrid_Sim_Slot: 'string',\n        Touchscreen: 'string',\n        OTG_Compatible: 'string',\n        Display_Features: {\n          Display_Size: 'string',\n          Resolution: 'string',\n          Resolution_Type: 'string',\n          GPU: 'string',\n          Display_Type: 'string',\n          Display_Colors: 'string'\n        },\n        Os_and_Processor_Features: {\n          Operating_System: 'string',\n          Processor_Type: 'string',\n          Processor_Core: 'string',\n          Primary_Clock_Speed: 'string'\n        },\n        Memory_and_Storage_Features: {\n          Internal_Storage: 'string',\n          RAM: 'string',\n          Total_Memory: 'string',\n          Expandable_Storage: 'string',\n          Supported_Memory_Card_Type: 'string',\n          Memory_Card_Slot_Type: 'string'\n        },\n        Camera_Features: {\n          Primary_Camera_Available: 'string',\n          Primary_Camera: 'string',\n          Primary_Camera_Features: ['default'],\n          Secondary_Camera_Available: 'string',\n          Secondary_Camera: 'string',\n          Flash: 'string',\n          Full_HD_Recording: 'string',\n          Frame_Rate: 'string'\n        },\n        Connectivity_Features: {\n          Network_Type: ['default'],\n          Supported_Networks: ['default'],\n          threeG: 'string',\n          Bluetooth_Support: 'string',\n          Bluetooth_Version: number,\n          Wi_Fi: 'string',\n          Audio_Jack: number\n        },\n        Multimedia_Features: {\n          FM_Radio: 'string',\n          FM_Radio_Recording: 'string',\n          Audio_Formats: ['default'],\n          Video_Formats: ['default']\n        },\n        Battery_and_Power_Features: {\n          Battery_Capacity: 'string'\n        },\n        Dimensions: {\n          Width: 'string',\n          Height: 'string',\n          Depth: 'string',\n          Weight: 'string'\n        },\n        Smartphone: 'string',\n        SIM_Size: 'string',\n        Removable_Battery: 'string',\n        Keypad: 'string',\n        Graphics_PPI: 'string',\n        Added_to_cart: false,\n        Added_to_cart_by: ['user'],\n        Bought_amount: number,\n        Bought_by: {\n          users: ['default'],\n          number_of_times: [number]\n        },\n        Warranty_and_Gurantee: {\n          Warranty_Summary: 'string',\n          Gurantee_Summary: 'string'\n        }\n      }\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error - Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"error\": true,\n    \"message\": \"product info can not be found\",\n    \"status\": 404,\n    \"data\": null\n  }",
          "type": "json"
        },
        {
          "title": "Error - Response:",
          "content": "HTTP/1.1 500 internal server error\n{\n    \"error\": true,\n    \"message\": \"internal server error\",\n    \"status\": 500,\n    \"data\": null\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "route/ecom.js",
    "groupTitle": "Read",
    "name": "GetViewProduct_idProduct_id"
  },
  {
    "type": "get",
    "url": "/view/product_id/:uuid",
    "title": "Get a single product info of a certain uuid",
    "version": "0.0.1",
    "group": "Read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uuid",
            "description": "<p>The uuid should be passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success - Response:",
          "content": " HTTP/1.1 200 OK\n{\n      \"error\": false,\n      \"message\": \" infos has been updated\",\n      \"status\": 200,\n      \"data\": \n      {\n        basic_info: {\n          url: 'string',\n          uuid: 'string',\n          source: {\n            site: 'string',\n            site_section: 'string',\n            section_title: 'string',\n            country: 'string'\n          },\n          name: 'string',\n          description: {\n            Band_Color: 'string',\n            Band_Material: 'string',\n\n            Watch_Movement_Type: 'string',\n            Watch_Display_Type: 'string',\n\n            Suitable: 'string'\n          },\n          brand: 'string',\n          price: 'string',\n          currency: 'string',\n          offer_price: 'string',\n          model: 'string',\n          manufacturer: 'string',\n          in_stock: 'string',\n          on_sale: 'string',\n          product_id: 'string',\n          Clasp: 'string',\n          Item_Weight: 'string',\n          rating_desc: {\n            mean_rating: number,\n            best_rating: number,\n            worst_rating: number,\n            rating_count: number,\n            reviews_count: number\n          },\n          images: ['default url'],\n          language: 'string',\n          Date_first_available_at_buytoo: 'date',\n          Last_bought: 'date'\n        },\n        Band_Colour: 'string',\n        Display_Type: 'string',\n        Dial_Colour: 'string',\n        categories: ['default'],\n        Browse_Type: 'string',\n        SIM: 'string',\n\n        Hybrid_Sim_Slot: 'string',\n        Touchscreen: 'string',\n        OTG_Compatible: 'string',\n        Display_Features: {\n          Display_Size: 'string',\n          Resolution: 'string',\n          Resolution_Type: 'string',\n          GPU: 'string',\n          Display_Type: 'string',\n          Display_Colors: 'string'\n        },\n        Os_and_Processor_Features: {\n          Operating_System: 'string',\n          Processor_Type: 'string',\n          Processor_Core: 'string',\n          Primary_Clock_Speed: 'string'\n        },\n        Memory_and_Storage_Features: {\n          Internal_Storage: 'string',\n          RAM: 'string',\n          Total_Memory: 'string',\n          Expandable_Storage: 'string',\n          Supported_Memory_Card_Type: 'string',\n          Memory_Card_Slot_Type: 'string'\n        },\n        Camera_Features: {\n          Primary_Camera_Available: 'string',\n          Primary_Camera: 'string',\n          Primary_Camera_Features: ['default'],\n          Secondary_Camera_Available: 'string',\n          Secondary_Camera: 'string',\n          Flash: 'string',\n          Full_HD_Recording: 'string',\n          Frame_Rate: 'string'\n        },\n        Connectivity_Features: {\n          Network_Type: ['default'],\n          Supported_Networks: ['default'],\n          threeG: 'string',\n          Bluetooth_Support: 'string',\n          Bluetooth_Version: number,\n          Wi_Fi: 'string',\n          Audio_Jack: number\n        },\n        Multimedia_Features: {\n          FM_Radio: 'string',\n          FM_Radio_Recording: 'string',\n          Audio_Formats: ['default'],\n          Video_Formats: ['default']\n        },\n        Battery_and_Power_Features: {\n          Battery_Capacity: 'string'\n        },\n        Dimensions: {\n          Width: 'string',\n          Height: 'string',\n          Depth: 'string',\n          Weight: 'string'\n        },\n        Smartphone: 'string',\n        SIM_Size: 'string',\n        Removable_Battery: 'string',\n        Keypad: 'string',\n        Graphics_PPI: 'string',\n        Added_to_cart: false,\n        Added_to_cart_by: ['user'],\n        Bought_amount: number,\n        Bought_by: {\n          users: ['default'],\n          number_of_times: [number]\n        },\n        Warranty_and_Gurantee: {\n          Warranty_Summary: 'string',\n          Gurantee_Summary: 'string'\n        }\n      }\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error - Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"error\": true,\n    \"message\": \"product info can not be found\",\n    \"status\": 404,\n    \"data\": null\n  }",
          "type": "json"
        },
        {
          "title": "Error - Response:",
          "content": "HTTP/1.1 500 internal server error\n{\n    \"error\": true,\n    \"message\": \"internal server error\",\n    \"status\": 500,\n    \"data\": null\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "route/ecom.js",
    "groupTitle": "Read",
    "name": "GetViewProduct_idUuid"
  },
  {
    "type": "get",
    "url": "/view/users/:users",
    "title": "Get  product infos based on same Added_to_cart",
    "version": "0.0.1",
    "group": "Read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "Added_to_cart",
            "description": "<p>Added_to_cart should be passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success - Response:",
          "content": " HTTP/1.1 200 OK\n{\n      \"error\": false,\n      \"message\": \"products' infos has been found\",\n      \"status\": 200,\n      \"data\": \n      [{\n        basic_info: {\n          url: 'string',\n          uuid: 'string',\n          source: {\n            site: 'string',\n            site_section: 'string',\n            section_title: 'string',\n            country: 'string'\n          },\n          name: 'string',\n          description: {\n            Band_Color: 'string',\n            Band_Material: 'string',\n\n            Watch_Movement_Type: 'string',\n            Watch_Display_Type: 'string',\n\n            Suitable: 'string'\n          },\n          brand: 'string',\n          price: 'string',\n          currency: 'string',\n          offer_price: 'string',\n          model: 'string',\n          manufacturer: 'string',\n          in_stock: 'string',\n          on_sale: 'string',\n          product_id: 'string',\n          Clasp: 'string',\n          Item_Weight: 'string',\n          rating_desc: {\n            mean_rating: number,\n            best_rating: number,\n            worst_rating: number,\n            rating_count: number,\n            reviews_count: number\n          },\n          images: ['default url'],\n          language: 'string',\n          Date_first_available_at_buytoo: 'date',\n          Last_bought: 'date'\n        },\n        Band_Colour: 'string',\n        Display_Type: 'string',\n        Dial_Colour: 'string',\n        categories: ['default'],\n        Browse_Type: 'string',\n        SIM: 'string',\n\n        Hybrid_Sim_Slot: 'string',\n        Touchscreen: 'string',\n        OTG_Compatible: 'string',\n        Display_Features: {\n          Display_Size: 'string',\n          Resolution: 'string',\n          Resolution_Type: 'string',\n          GPU: 'string',\n          Display_Type: 'string',\n          Display_Colors: 'string'\n        },\n        Os_and_Processor_Features: {\n          Operating_System: 'string',\n          Processor_Type: 'string',\n          Processor_Core: 'string',\n          Primary_Clock_Speed: 'string'\n        },\n        Memory_and_Storage_Features: {\n          Internal_Storage: 'string',\n          RAM: 'string',\n          Total_Memory: 'string',\n          Expandable_Storage: 'string',\n          Supported_Memory_Card_Type: 'string',\n          Memory_Card_Slot_Type: 'string'\n        },\n        Camera_Features: {\n          Primary_Camera_Available: 'string',\n          Primary_Camera: 'string',\n          Primary_Camera_Features: ['default'],\n          Secondary_Camera_Available: 'string',\n          Secondary_Camera: 'string',\n          Flash: 'string',\n          Full_HD_Recording: 'string',\n          Frame_Rate: 'string'\n        },\n        Connectivity_Features: {\n          Network_Type: ['default'],\n          Supported_Networks: ['default'],\n          threeG: 'string',\n          Bluetooth_Support: 'string',\n          Bluetooth_Version: number,\n          Wi_Fi: 'string',\n          Audio_Jack: number\n        },\n        Multimedia_Features: {\n          FM_Radio: 'string',\n          FM_Radio_Recording: 'string',\n          Audio_Formats: ['default'],\n          Video_Formats: ['default']\n        },\n        Battery_and_Power_Features: {\n          Battery_Capacity: 'string'\n        },\n        Dimensions: {\n          Width: 'string',\n          Height: 'string',\n          Depth: 'string',\n          Weight: 'string'\n        },\n        Smartphone: 'string',\n        SIM_Size: 'string',\n        Removable_Battery: 'string',\n        Keypad: 'string',\n        Graphics_PPI: 'string',\n        Added_to_cart: false,\n        Added_to_cart_by: ['user'],\n        Bought_amount: number,\n        Bought_by: {\n          users: ['default'],\n          number_of_times: [number]\n        },\n        Warranty_and_Gurantee: {\n          Warranty_Summary: 'string',\n          Gurantee_Summary: 'string'\n        }\n      },{....},....]\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error - Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"error\": true,\n    \"message\": \"product info can not be found\",\n    \"status\": 404,\n    \"data\": null\n  }",
          "type": "json"
        },
        {
          "title": "Error - Response:",
          "content": "HTTP/1.1 500 internal server error\n{\n    \"error\": true,\n    \"message\": \"internal server error\",\n    \"status\": 500,\n    \"data\": null\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "route/ecom.js",
    "groupTitle": "Read",
    "name": "GetViewUsersUsers"
  },
  {
    "type": "get",
    "url": "/view/users/:users",
    "title": "Get   product infos based on same category",
    "version": "0.0.1",
    "group": "Read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "product_id",
            "description": "<p>The product_id should be passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success - Response:",
          "content": " HTTP/1.1 200 OK\n{\n      \"error\": false,\n      \"message\": \"products' infos has been found\",\n      \"status\": 200,\n      \"data\": \n      [{\n        basic_info: {\n          url: 'string',\n          uuid: 'string',\n          source: {\n            site: 'string',\n            site_section: 'string',\n            section_title: 'string',\n            country: 'string'\n          },\n          name: 'string',\n          description: {\n            Band_Color: 'string',\n            Band_Material: 'string',\n\n            Watch_Movement_Type: 'string',\n            Watch_Display_Type: 'string',\n\n            Suitable: 'string'\n          },\n          brand: 'string',\n          price: 'string',\n          currency: 'string',\n          offer_price: 'string',\n          model: 'string',\n          manufacturer: 'string',\n          in_stock: 'string',\n          on_sale: 'string',\n          product_id: 'string',\n          Clasp: 'string',\n          Item_Weight: 'string',\n          rating_desc: {\n            mean_rating: number,\n            best_rating: number,\n            worst_rating: number,\n            rating_count: number,\n            reviews_count: number\n          },\n          images: ['default url'],\n          language: 'string',\n          Date_first_available_at_buytoo: 'date',\n          Last_bought: 'date'\n        },\n        Band_Colour: 'string',\n        Display_Type: 'string',\n        Dial_Colour: 'string',\n        categories: ['default'],\n        Browse_Type: 'string',\n        SIM: 'string',\n\n        Hybrid_Sim_Slot: 'string',\n        Touchscreen: 'string',\n        OTG_Compatible: 'string',\n        Display_Features: {\n          Display_Size: 'string',\n          Resolution: 'string',\n          Resolution_Type: 'string',\n          GPU: 'string',\n          Display_Type: 'string',\n          Display_Colors: 'string'\n        },\n        Os_and_Processor_Features: {\n          Operating_System: 'string',\n          Processor_Type: 'string',\n          Processor_Core: 'string',\n          Primary_Clock_Speed: 'string'\n        },\n        Memory_and_Storage_Features: {\n          Internal_Storage: 'string',\n          RAM: 'string',\n          Total_Memory: 'string',\n          Expandable_Storage: 'string',\n          Supported_Memory_Card_Type: 'string',\n          Memory_Card_Slot_Type: 'string'\n        },\n        Camera_Features: {\n          Primary_Camera_Available: 'string',\n          Primary_Camera: 'string',\n          Primary_Camera_Features: ['default'],\n          Secondary_Camera_Available: 'string',\n          Secondary_Camera: 'string',\n          Flash: 'string',\n          Full_HD_Recording: 'string',\n          Frame_Rate: 'string'\n        },\n        Connectivity_Features: {\n          Network_Type: ['default'],\n          Supported_Networks: ['default'],\n          threeG: 'string',\n          Bluetooth_Support: 'string',\n          Bluetooth_Version: number,\n          Wi_Fi: 'string',\n          Audio_Jack: number\n        },\n        Multimedia_Features: {\n          FM_Radio: 'string',\n          FM_Radio_Recording: 'string',\n          Audio_Formats: ['default'],\n          Video_Formats: ['default']\n        },\n        Battery_and_Power_Features: {\n          Battery_Capacity: 'string'\n        },\n        Dimensions: {\n          Width: 'string',\n          Height: 'string',\n          Depth: 'string',\n          Weight: 'string'\n        },\n        Smartphone: 'string',\n        SIM_Size: 'string',\n        Removable_Battery: 'string',\n        Keypad: 'string',\n        Graphics_PPI: 'string',\n        Added_to_cart: false,\n        Added_to_cart_by: ['user'],\n        Bought_amount: number,\n        Bought_by: {\n          users: ['default'],\n          number_of_times: [number]\n        },\n        Warranty_and_Gurantee: {\n          Warranty_Summary: 'string',\n          Gurantee_Summary: 'string'\n        }\n      },{....},....]\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error - Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"error\": true,\n    \"message\": \"product info can not be found\",\n    \"status\": 404,\n    \"data\": null\n  }",
          "type": "json"
        },
        {
          "title": "Error - Response:",
          "content": "HTTP/1.1 500 internal server error\n{\n    \"error\": true,\n    \"message\": \"internal server error\",\n    \"status\": 500,\n    \"data\": null\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "route/ecom.js",
    "groupTitle": "Read",
    "name": "GetViewUsersUsers"
  }
] });
