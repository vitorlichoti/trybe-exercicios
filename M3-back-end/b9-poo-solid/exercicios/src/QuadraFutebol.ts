import Quadra from "./Quadra";
import IFutebol from "./interfaces/IFutebol";
import normas from './normas/normasDeUso';
import IAgenda from "./interfaces/IAgenda";

export default class QuadraFutebol extends Quadra {
  
  public futebolNormas: IFutebol = normas.futebol

  // *** Solução da Trybe ***
  // protected reservar<IFutebol>(reservar: Date): IAgenda<IFutebol> {
  //   const protocolo = (Math.random() + 1).toString(30).substring(3);

  //   return {
  //     protocolo,
  //     data: reservar,
  //     regras: this.futebolData as unknown as IFutebol,
  //   };
  // }

  protected reservar<IFutebol>(reserva: Date) {
    const protocolo = (Math.random() + 1).toString(30).substring(3);
    return {
      protocolo,
      date: reserva,
      regras: this.futebolNormas
    }
  }
}