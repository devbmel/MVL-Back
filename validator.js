import Joi from "joi";

const authSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string()
    .min(6)
    .required()
    .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
    .strip(),
});

const userSchema = Joi.object({
  username: Joi.string().min(3).max(100).required(),
  email: Joi.string().email().required(),
  password: Joi.string()
    .min(6)
    .required()
    .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
    .strip(),
});

const bookSchema = Joi.object({
  title: Joi.string().min(3).max(100).required(),
  description: Joi.string().min(3).required(),
  author: Joi.string().min(3).max(100).required(),
  page_number: Joi.number().integer().positive(),
  status: Joi.string()
    .valid("en cours", "a lire", "lus", "souhaite")
    .default("a lire"),
  publication_date: Joi.date().iso(),
  genre: Joi.string().valid("fantasy", "romance", "classique"),
  summary: Joi.string(),
  cover_link: Joi.string(),
  add_date: Joi.date(),
  update_date: Joi.date(),
  isFavorite: Joi.boolean(),
  price: Joi.number().integer().positive(),
});

const booksRating = Joi.object({
  rating: Joi.number().integer().positive(),
  comment: Joi.string(),
  id_book: Joi.number().integer().positive(),
});
