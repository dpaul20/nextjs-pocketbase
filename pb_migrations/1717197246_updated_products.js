/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dmku5hehtqq7vsb")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "meswdzwa",
    "name": "stars",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dmku5hehtqq7vsb")

  // remove
  collection.schema.removeField("meswdzwa")

  return dao.saveCollection(collection)
})
