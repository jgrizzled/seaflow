<style>
  article {
    border: 1px;
    padding: 0;
    margin: 0;
  }
  img {
    border-radius: 50%;
  }
  p {
    margin: 10px 0 0 0;
    padding: 0;
  }
</style>

<script lang="ts">
  import type { NFTsaleData } from './fetchNewSales';
  export let sale: NFTsaleData;
  const maxWidth = 250;
  const minWidth = 50;
  const USDvalue = sale.paymentAmount * sale.paymentToken.USDprice;
  const ETHvalue = sale.paymentAmount * sale.paymentToken.ETHprice;
  const valueCap = 7;
  const scalar = Math.min(Math.log10(USDvalue) / valueCap, 1);
  const size = Math.max(scalar * maxWidth, minWidth);
</script>

<article>
  <img src={sale.imageURL} alt={sale.name} width="{size}px" height="{size}px" />
  <p>${USDvalue.toFixed(2)}</p>
</article>
