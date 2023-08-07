import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyFormat'
})
export class CurrencyFormatPipe implements PipeTransform {

  transform(price: string, currencyCode: string = 'USD' ): string {
    const priceFormatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currencyCode,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })

    let formattedPrice = priceFormatter.format(Number(price))

    if (Number(price) >= 1000000000) {
      const billions = (Number(price) / 1000000000).toFixed(3);
      formattedPrice = `$ ${billions} billion`;
    }

    return formattedPrice
  }

}
