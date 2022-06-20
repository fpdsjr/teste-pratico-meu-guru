class User {
  id: number;

  nome: string;

  email: string;

  senha: string;

  deletado?: boolean;

  constructor() {
    if (!this.id) {
      this.id = Math.floor(Math.random() * 1000);
    }
  }
}

export { User };
