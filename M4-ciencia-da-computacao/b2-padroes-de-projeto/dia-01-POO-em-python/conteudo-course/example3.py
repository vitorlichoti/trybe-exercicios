# # Codigo de setters e getter sem especificidade Python
# # (sem os decoradores @property @algumapropiedade.setter)
# class Liquidificador:
#     def get_cor(self):
#         return self.__cor.upper()

#     def set_cor(self, nova_cor):
#         if nova_cor.lower() == "turquesa":
#             raise ValueError("Não existe liquidificador turquesa")

#         self.__cor = nova_cor

#     def __init__(self, cor, potencia, tensao, preco):
#         # Observe que usamos o setter para já validarmos o primeiro valor
#         self.set_cor(cor)

#         # Demais variáveis omitidas para este exemplo


# liquidificador = Liquidificador("Azul", "110", "127", "200")

# # print(f"A cor atual é {liquidificador.__cor}")
# # AttributeError: 'Liquidificador' object has no attribute '__cor'

# print(f"A cor atual é {liquidificador.get_cor()}")
# # A cor atual é AZUL
# liquidificador.set_cor("Preto")
# print(f"Após pintarmos, a nova cor é {liquidificador.get_cor()}")
# # Após pintarmos, a nova cor é PRETO


# Codigo de setters e getters COM a ESPECIFICIDADE Python
# (COM os decoradores @property @algumapropiedade.setter)
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

    def __init__(self, cor, potencia, tensao, preco):
        # Observe que usamos o setter para já validarmos o primeiro valor:
        # usamos self.cor, que chama o setter, e não self.__cor que manipula
        # o atributo diretamente
        self.cor = cor

        # Demais variáveis omitidas para este exemplo


liquidificador = Liquidificador("Rosa", "110", "127", "200")

print(liquidificador.cor)  # ROSA
liquidificador.cor = "Vermelho"
print(liquidificador.cor)  # VERMELHO
