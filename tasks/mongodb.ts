import { Db, MongoClient, ObjectId } from 'mongodb';

import { mongodb } from '../assets/mongod';

/**
 * Task
 * MongoDB aggregation
 *
 * The function should return list of products added by a user,
 *   id of whom passed in the params. The list should contain products
 *   for enabled companies only and by categories (i.e. { food: [], ... })
 */

enum Category {
  Press = 'press',
  Equipment = 'equipment',
  Software = 'software',
  Food = 'food',
  // ... there is more categories
}

interface Company {
  _id: ObjectId;
  title: string;
  category: Category;
  disabled: boolean;
}

interface Product {
  _id: ObjectId;
  companyId: ObjectId;
  title: string;
  employeeId: ObjectId;
}

interface Employee {
  _id: ObjectId;
  companyId: ObjectId;
  userId: ObjectId;
}

interface User {
  _id: ObjectId;
  name: string;
}

/**
 * 1. Complete the type, which should contain all categories
 *    as keys and products arrays as values
 * 2. Use typescript power for that
 */
type ProductsByCategories = {
  // press: Array<Product>,
  // ...
};

async function findOwnedProducts(
  userId: ObjectId,
  db: Db
): Promise<ProductsByCategories> {
  return db.collection('').aggregate([]).toArray();
}

async function bootstrap(): Promise<ProductsByCategories> {
  const client = new MongoClient(mongodb, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as any);

  client.on('error', (error) => console.log(error));

  await client.connect();

  // const db = client.db('quiz');

  console.log(client);

  // return findOwnedProducts(new ObjectId(''), db);

  // client.close();

  return {};
}

bootstrap().then(console.log).catch(console.error);
