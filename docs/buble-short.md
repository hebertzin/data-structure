# Sobre o Algoritmo Bubble Sort

O Bubble Sort é um algoritmo de ordenação simples, porém fundamental, frequentemente utilizado em cursos introdutórios de ciência da computação. Neste artigo, exploraremos como funciona o Bubble Sort, seus exemplos de implementação em JavaScript e os prós e contras desse algoritmo.

## como funciona ?

O Bubble Sort funciona comparando repetidamente pares adjacentes de elementos e os trocando se estiverem na ordem errada. Esse processo continua até que nenhum swap seja necessário, o que significa que o array está completamente ordenado.

Passos do Bubble Sort:

- Inicie com um array não ordenado.
- Percorra o array da esquerda para a direita.
- Compare cada par de elementos adjacentes.
- Se o elemento atual for maior que o próximo elemento, troque-os de lugar.
- Repita os passos 2 a 4 até que nenhum swap seja realizado em uma passagem completa pelo array.

O Bubble Sort é um algoritmo de classificação in-place, o que significa que ele não requer espaço adicional além do próprio array.

## implementação

```javascript
function bubbleShort(array) {
  const length = array.length - 1;

  for (let i = 0; i <= length; i++) {
    for (let j = 0; j <= length - i; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }

  return array;
}

const array = [30, 40, 52, 84, 5, 987];

const result = bubbleShort(array); // output : [ 5, 30, 40, 52, 84, 987 ]
```

## Prós

- Simplicidade: O Bubble Sort é fácil de entender e implementar, tornando-o uma boa escolha para fins educacionais e para ordenar pequenos conjuntos de dados.
- In-place: O Bubble Sort opera diretamente no array de entrada, sem a necessidade de espaço adicional.
