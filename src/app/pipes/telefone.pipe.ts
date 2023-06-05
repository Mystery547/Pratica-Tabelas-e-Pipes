import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telefone'
})
export class TelefonePipe implements PipeTransform {
  transform(valor: string): string {
//   se tiver 8 dígitos, transformar para o padrão: 9999-8888
// - se tiver 10 (ddd com 2 dígitos) ou 11 (ddd com 0 no início) dígitos, transformar para o padrão: (ddd) 9999-8888
// - caso contrário, não transformar (retornar o mesmo valor que entrou)
    if (valor.length == 9) {
      return valor.substring(0, 4)
        + '-' + valor.substring(4,8)
    } else if (valor.length == 11) {
      return '(' + valor.substring(0,2) + ')' + valor.substring(2, 6) + '-' + valor.substring(6, 11)
    } else if (valor.length == 12) {
      return '(' + valor.substring(0,3) + ')' + valor.substring(3, 7) + '-' + valor.substring(7, 11)
    }

    return valor;

  }
}
