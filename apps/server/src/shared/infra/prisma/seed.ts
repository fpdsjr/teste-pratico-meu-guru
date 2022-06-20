import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.users.create({
    data: {
      nome: 'bob',
      email: 'bob@prisma.io',
      senha: '123456',
      deletado: false,
    },
  });

  await prisma.users.create({
    data: {
      nome: 'Felipe Davi André Ferreira',
      email: 'felipe-ferreira90@cenavip.com.br',
      senha: '$argon2i$v=19$m=16,t=2,p=1$ZGFzZGRhc2Rhc2Rhc2Rhcw$GKioPhXoRy1npoF9YzcEoQ',
      deletado: false,
    },
  });

  await prisma.users.create({
    data: {
      nome: 'Gabrielly Tânia Olivia Drumond',
      email: 'gabrielly_tania_drumond@technocut.com.br',
      senha: '$argon2i$v=19$m=16,t=2,p=1$ZGFzZGRhc2Rhc2Rhc2Rhcw$GKioPhXoRy1npoF9YzcEoQ',
      deletado: false,
    },
  });

  await prisma.users.create({
    data: {
      nome: 'Guilherme Marcos Vinicius Luís Barros',
      email: 'guilhermemarcosbarros@img.com.br',
      senha: '$argon2i$v=19$m=16,t=2,p=1$ZGFzZGRhc2Rhc2Rhc2Rhcw$GKioPhXoRy1npoF9YzcEoQ',
      deletado: false,
    },
  });

  await prisma.users.create({
    data: {
      nome: 'Bárbara Rafaela da Silva',
      email: 'barbara_rafaela_dasilva@hotmaill.com',
      senha: '$argon2i$v=19$m=16,t=2,p=1$ZGFzZGRhc2Rhc2Rhc2Rhcw$GKioPhXoRy1npoF9YzcEoQ',
      deletado: true,
    },
  });

  await prisma.users.create({
    data: {
      nome: 'Alessandra Adriana Camila Ribeiro',
      email: 'alessandra_adriana_ribeiro@profemme.com.br',
      senha: '$argon2i$v=19$m=16,t=2,p=1$ZGFzZGRhc2Rhc2Rhc2Rhcw$GKioPhXoRy1npoF9YzcEoQ',
      deletado: true,
    },
  });

  await prisma.users.create({
    data: {
      nome: 'Vinicius Calebe Heitor Santos',
      email: 'vinicius.calebe.santos@rjnet.com.br',
      senha: '$argon2i$v=19$m=16,t=2,p=1$ZGFzZGRhc2Rhc2Rhc2Rhcw$GKioPhXoRy1npoF9YzcEoQ',
      deletado: true,
    },
  });

  await prisma.users.create({
    data: {
      nome: 'Henrique Vicente Noah Assis',
      email: 'henrique.vicente.assis@publicarbrasil.com.br',
      senha: '$argon2i$v=19$m=16,t=2,p=1$ZGFzZGRhc2Rhc2Rhc2Rhcw$GKioPhXoRy1npoF9YzcEoQ',
      deletado: false,
    },
  });

  await prisma.users.create({
    data: {
      nome: 'Pedro Carlos Eduardo Henrique Costa',
      email: 'pedrocarloscosta@msn.com.br',
      senha: '$argon2i$v=19$m=16,t=2,p=1$ZGFzZGRhc2Rhc2Rhc2Rhcw$GKioPhXoRy1npoF9YzcEoQ',
      deletado: false,
    },
  });

  await prisma.users.create({
    data: {
      nome: 'Analu Patrícia Monteiro',
      email: 'analu_monteiro@hellokitty.com',
      senha: '$argon2i$v=19$m=16,t=2,p=1$ZGFzZGRhc2Rhc2Rhc2Rhcw$GKioPhXoRy1npoF9YzcEoQ',
      deletado: false,
    },
  });

  await prisma.users.create({
    data: {
      nome: 'Anthony Geraldo Dias',
      email: 'anthony-dias88@agenciaph.com',
      senha: '$argon2i$v=19$m=16,t=2,p=1$ZGFzZGRhc2Rhc2Rhc2Rhcw$GKioPhXoRy1npoF9YzcEoQ',
      deletado: false,
    },
  });

  await prisma.users.create({
    data: {
      nome: 'Miguel Fábio Paulo Assis',
      email: 'miguelfabioassis@gerdal.com.br',
      senha: '$argon2i$v=19$m=16,t=2,p=1$ZGFzZGRhc2Rhc2Rhc2Rhcw$GKioPhXoRy1npoF9YzcEoQ',
      deletado: true,
    },
  });

  await prisma.users.create({
    data: {
      nome: 'Murilo Erick Moraes',
      email: 'murilo_erick_moraes@yahool.com',
      senha: '$argon2i$v=19$m=16,t=2,p=1$ZGFzZGRhc2Rhc2Rhc2Rhcw$GKioPhXoRy1npoF9YzcEoQ',
      deletado: true,
    },
  });

  await prisma.users.create({
    data: {
      nome: 'Augusto Elias Araújo',
      email: 'augusto.elias.araujo@isometro.com.br',
      senha: '$argon2i$v=19$m=16,t=2,p=1$ZGFzZGRhc2Rhc2Rhc2Rhcw$GKioPhXoRy1npoF9YzcEoQ',
      deletado: true,
    },
  });
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
