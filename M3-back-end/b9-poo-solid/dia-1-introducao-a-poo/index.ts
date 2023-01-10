class Tv {
  // atributos
  private _brand: string;
  private _size: number;
  private _resolution: string;
  private _connections: string[];
  private _connectedTo?: string;_

  // Métodos
  // Método construtor
  constructor(b:string, s:number, r:string, c:string[]) {
    this._brand = b;
    this._size = s;
    this._resolution = r;
    this._connections = c;
  }

  get connectedTo(): string | undefined {
    return this._connectedTo;
  }

  set connectedTo(value: string | undefined) {
    if (!value || this._connections.includes(value)) {
      this._connectedTo = value;
      console.log(this._connectedTo);
    } else {
      console.log('Sorry, connection unavailable');
      
    }
  }

  turnOn() {
    console.log(this._brand, this._size, this._resolution, this._connections, this._connectedTo)
  }
}

const tv1 = new Tv('mitsubishi', 29, '1920x1080', ['wi-fi', 'HDMI']);

tv1.turnOn();

tv1.connectedTo = 'wi-fi';
console.log('Connected to: ', tv1.connectedTo);
