class Liquidificador:
    # Getter
    @property
    def cor(self):
        return self.__cor.upper()

    @cor.setter  # Repare que é @cor.setter, e não @property.setter
    def cor(self, nova_cor):
        if nova_cor.lower() == "turquesa":
            raise ValueError("Não existe liquidificador turquesa")

        self.__cor = nova_cor

    def __init__(self, cor: str, potencia: int, tensao: int, preco: float):
        # Observe que usamos o setter para já validarmos o primeiro valor:
        # usamos self.cor, que chama o setter, e não self.__cor que manipula
        # o atributo diretamente
        self.cor = cor
        self.potencia = potencia
        self.tensao = tensao
        self.preco = preco

        # Demais variáveis omitidas para este exemplo


liquidificador = Liquidificador("Rosa", 110, 127, 2000.00)
liquidificador.cor = "Vermelho"


class Ventilador:
    def __init__(self, cor: str, potencia: int, voltagem: int, preco: float):
        self.cor = cor
        self.potencia = potencia
        self.voltagem = voltagem
        self.preco = preco


ventilador = Ventilador('preto', 60, 127, 98.9)


class Pessoa:
    def __init__(self, nome, saldo_na_conta):
        self.nome = nome
        self.saldo_na_conta = saldo_na_conta
        self.eletrodomestico = None

    def comprar_algo(self, eletrodomestico):
        if eletrodomestico.preco <= self.saldo_na_conta:
            self.saldo_na_conta -= eletrodomestico.preco
            self.eletrodomestico = eletrodomestico
            return self.saldo_na_conta


pessoa_cozinheira = Pessoa("Jacquin", 3000)
comprou_liquidificador = pessoa_cozinheira.comprar_algo(liquidificador)
comprou_ventilador1 = pessoa_cozinheira.comprar_algo(ventilador)
comprou_ventilador2 = pessoa_cozinheira.comprar_algo(ventilador)
print(pessoa_cozinheira.saldo_na_conta)
