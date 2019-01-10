# js-helpers

Biblioteca javascript para agilizar o desenvolvimento. Utilitários e Facilitadores para escrever a regra de negócio de forma clara e objetiva.

## STRINGS:

### Capitalize
`Strings.capitalize('string lowercase virou capitalize');`
**Resultado**: String lowercase virou capitalize

### Uppercase
`Strings.uppercase('string lowercase virou uppercase');`
**Resultado**: STRING LOWERCASE VIROU UPPERCASE

### Lowercase
`Strings.lowercase('STRING UPPERCASE VIROU LOWERCASE');`
**Resultado**: string uppercase virou lowercase

### String começa com
`Strings.starts_with('banana', 'bana');`
**Resultado**: true

### String termina com
`Strings.ends_with('banana', ana');`
**Resultado**: true

### Remove carácteres do início
`Strings.remove_char_left('remover 1 caracter do inicio', 1);`
**Resultado**: emover 1 caracter do inicio

### Remove carácteres do final
`Strings.remove_char_right('remover 3 caracteres do final', 3);`
**Resultado**: remover 3 caracteres do fi

### Plural pt-BR
`Strings.pluralize_pt('caneta');`
**Resultado**: canetas
`Strings.pluralize_pt('pessoa');`
**Resultado**: pessoas
`Strings.pluralize_pt('qualquer');`
**Resultado**: quaisquer
`Strings.pluralize_pt('mão');`
**Resultado**: mãos
`Strings.pluralize_pt('cidade');`
**Resultado**: cidades
`Strings.pluralize_pt('cidadão');`
**Resultado**: cidadões

### Singular pt-BR
`Strings.singulate_pt('canetas');`
**Resultado**: canetassssssssssssssss
`Strings.singulate_pt('pessoas');`
**Resultado**: pessoa
`Strings.singulate_pt('quaisquer');`
**Resultado**: qualquer
`Strings.singulate_pt('mãos');`
**Resultado**: mão
`Strings.singulate_pt('cidades');`
**Resultado**: cidade
`Strings.singulate_pt('cidadões');`
**Resultado**: cidadão

### Inteiro por Extenso
#### Normal
`Strings.integer_to_word_pt(1);`
**Resultado**: um
`Strings.integer_to_word_pt(223);`
**Resultado**: duzentos e vinte e três
`Strings.integer_to_word_pt(61);`
**Resultado**: sessenta e um
`Strings.integer_to_word_pt(6546785);`
**Resultado**: seis milhões quinhentos e quarenta e seis mil setecentos e oitenta e cinco
`Strings.integer_to_word_pt(687);`
**Resultado**: seiscentos e oitenta e sete
`Strings.integer_to_word_pt(1785.5);`
**Resultado**: um mil setecentos e oitenta e cinco vírgula cinco
`Strings.integer_to_word_pt(0);`
**Resultado**: zero
`Strings.integer_to_word_pt(0.345);`
**Resultado**: zero vírgula trezentos e quarenta e cinco
`Strings.integer_to_word_pt(14);`
**Resultado**: quatorze
`Strings.integer_to_word_pt(4536);`
**Resultado**: quatro mil quinhentos e trinta e seis
`Strings.integer_to_word_pt(425642368575263241234);`
**Resultado**: quatrocentos e vinte e cinco quintilhões seiscentos e quarenta e dois quatrilhões trezentos e sessenta e oito trilhões quinhentos e setenta e cinco bilhões duzentos e sessenta e três milhões e duzentos mil

#### Porcentagem
`Strings.integer_to_word_pt(1, 'porcentagem');`
**Resultado**: um porcento
`Strings.integer_to_word_pt(223, 'porcentagem');`
**Resultado**: duzentos e vinte e três porcento
`Strings.integer_to_word_pt(61, 'porcentagem');`
**Resultado**: sessenta e um porcento
`Strings.integer_to_word_pt(6546785, 'porcentagem');`
**Resultado**: seis milhões quinhentos e quarenta e seis mil setecentos e oitenta e cinco porcento
`Strings.integer_to_word_pt(687, 'porcentagem');`
**Resultado**: seiscentos e oitenta e sete porcento
`Strings.integer_to_word_pt(1785.5, 'porcentagem');`
**Resultado**: um mil setecentos e oitenta e cinco vírgula cinco porcento
`Strings.integer_to_word_pt(0, 'porcentagem');`
**Resultado**: zero porcento
`Strings.integer_to_word_pt(0.345, 'porcentagem');`
**Resultado**: zero vírgula trezentos e quarenta e cinco porcento
`Strings.integer_to_word_pt(14, 'porcentagem');`
**Resultado**: quatorze porcento
`Strings.integer_to_word_pt(4536, 'porcentagem');`
**Resultado**: quatro mil quinhentos e trinta e seis porcento
`Strings.integer_to_word_pt(4265263241234, 'porcentagem');`
**Resultado**: quatro trilhões duzentos e sessenta e cinco bilhões duzentos e sessenta e três milhões duzentos e quarenta e um mil duzentos e trinta e quatro porcento


#### Monetario
`Strings.integer_to_word_pt(1, 'monetario');`
**Resultado**: um real
`Strings.integer_to_word_pt(223, 'monetario');`
**Resultado**: duzentos e vinte e três reais
`Strings.integer_to_word_pt(61, 'monetario');`
**Resultado**: sessenta e um reais
`Strings.integer_to_word_pt(6546785, 'monetario');`
**Resultado**: seis milhões quinhentos e quarenta e seis mil setecentos e oitenta e cinco reais
`Strings.integer_to_word_pt(687, 'monetario');`
**Resultado**: seiscentos e oitenta e sete reais
`Strings.integer_to_word_pt(1785.5, 'monetario');`
**Resultado**: um mil setecentos e oitenta e cinco reais e cinquenta centavos
`Strings.integer_to_word_pt(0, 'monetario');`
**Resultado**: zero
`Strings.integer_to_word_pt(0.345, 'monetario');`
**Resultado**: trinta e quatro centavos
`Strings.integer_to_word_pt(14, 'monetario');`
**Resultado**: quatorze reais
`Strings.integer_to_word_pt(4536, 'monetario');`
**Resultado**: quatro mil quinhentos e trinta e seis reais
`Strings.integer_to_word_pt(468321321575263241234, 'monetario');`
**Resultado**: quatrocentos e sessenta e oito quintilhões trezentos e vinte e um quatrilhões trezentos e vinte e um trilhões quinhentos e setenta e cinco bilhões 
