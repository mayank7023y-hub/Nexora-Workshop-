import bcrypt from 'bcryptjs';
import { prisma } from '../src/lib/prisma';

async function main() {
  console.log('🌱 Seeding database...');

  // Create test users
  const hashedPassword = await bcrypt.hash('password123', 10);

  const user1 = await prisma.user.upsert({
    where: { email: 'john@example.com' },
    update: {},
    create: {
      email: 'john@example.com',
      password: hashedPassword,
      name: 'John Doe',
      role: 'user',
    },
  });

  const user2 = await prisma.user.upsert({
    where: { email: 'jane@example.com' },
    update: {},
    create: {
      email: 'jane@example.com',
      password: hashedPassword,
      name: 'Jane Smith',
      role: 'instructor',
    },
  });

  console.log('✅ Created users:', { user1, user2 });

  // Create test workshops
  const workshop1 = await prisma.workshop.create({
    data: {
      title: 'Web Development Basics',
      description: 'Learn the fundamentals of web development',
      category: 'web-dev',
      price: 49.99,
      duration: 120,
      maxCapacity: 30,
      instructor: 'Jane Smith',
      organizerId: user2.id,
    },
  });

  const workshop2 = await prisma.workshop.create({
    data: {
      title: 'Advanced React Patterns',
      description: 'Master advanced React patterns and best practices',
      category: 'react',
      price: 79.99,
      duration: 180,
      maxCapacity: 25,
      instructor: 'Jane Smith',
      organizerId: user2.id,
    },
  });

  console.log('✅ Created workshops:', { workshop1, workshop2 });

  // Create test products
  const product1 = await prisma.product.create({
    data: {
      name: 'Laptop Stand',
      description: 'Ergonomic laptop stand for better posture',
      price: 29.99,
      stock: 50,
      category: 'accessories',
      creatorId: user2.id,
    },
  });

  const product2 = await prisma.product.create({
    data: {
      name: 'Mechanical Keyboard',
      description: 'Premium mechanical keyboard for developers',
      price: 89.99,
      stock: 30,
      category: 'accessories',
      creatorId: user2.id,
    },
  });

  console.log('✅ Created products:', { product1, product2 });

  // Create cart
  const cart = await prisma.cart.create({
    data: {
      userId: user1.id,
    },
  });

  // Add items to cart
  await prisma.cartItem.create({
    data: {
      cartId: cart.id,
      productId: product1.id,
      quantity: 2,
    },
  });

  console.log('✅ Created cart with items');

  console.log('✨ Seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Seeding error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });