
# Project Title

Project to display images and resize them if valid width and height been provided 


## API Reference

#### Get all items

```http
  GET http://localhost:3000/api/images?filename=fjord
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `filename` | `string` | **Required**. one of the images name in src/images/full folder |

#### Get item

```http
  GET http://localhost:3000/api/images?filename=fjord&width=400&height=400
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `width`   | `number` | to resize image width|
| `height`  | `number` | to resize image height|


