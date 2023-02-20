export class Livro {
  constructor(
    public codigo: number = -1,
    public titulo: string = "",
    public resumo: string = "",
    public autores: string[] = [],
    public codEditora: number = -1,
  ) {}
}
