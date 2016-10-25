var worlds = [];
{
  var levels = [];
  levels.push({configuration: '1111100000111110000011111000001111100000111110000011111000001111100000111110000011111000001111100000'});
  levels.push({configuration: '0000000000000000000000000000000000000000000000000000000000000000000000000000000011111111111111111111', message: 'How might you use <code>y</code> and <code>&gt;</code> on this one?'});
  levels.push({configuration: '1111111111111111111111111111111111111111000000000000000000000000000000000000000000000000000000000000', message: 'How might you use <code>&lt;=</code> on this one?'});
  levels.push({configuration: '0000000011000000001100000000110000000011000000001100000000110000000011000000001100000000110000000011', message: 'How might you use <code>&gt;=</code> on this one?'});
  worlds.push({levels: levels, message: '<div class="levelcomplete"><h3>Generation Complete</h3>You\'ve expressed all the litters of Generation 0! Your gene therapy skills allow you to express chromosomes using the relational operators <code>&lt;</code>, <code>&lt;=</code>, <code>&gt;</code>, and <code>&gt;=</code>. The proud parents are pleased with your services and invite you to help them with the litters of Generation 1. Are you ready? If so, hit Enter to continue.</div>'});
}
{
  var levels = [];
  levels.push({configuration: '1111111111000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000', message: 'If you want to express a particular <code>x</code> or <code>y</code> chromosome, use <code>==</code>. For example, <code>y == 0</code> causes the bottom row of kids to be born.'});
  levels.push({configuration: '0000010000000001000000000100000000010000000001000000000100000000010000000001000000000100000000010000'});
  levels.push({configuration: '0000000000000000000000000000000000000000000000000000000000001111111111000000000000000000000000000000'});
  levels.push({configuration: '1111111111000000000011111111111111111111111111111111111111111111111111111111111111111111111111111111', message: 'Sometimes you want to express all <code>x</code> or <code>y</code> chomosomes except a certain one. Use <code>!=</code> for this. For example, <code>y != 1</code> causes all kids but those with a <code>y</code> chromosome of 1 to be born.'});
  levels.push({configuration: '1111111101111111110111111111011111111101111111110111111111011111111101111111110111111111011111111101'});
  levels.push({configuration: '0111111111011111111101111111110111111111011111111101111111110111111111011111111101111111110111111111'});
  worlds.push({levels: levels, message: '<div class="levelcomplete"><h3>Generation Complete</h3>You\'ve expressed all litters of Generation 1! Your gene therapy skills allow you to express chromosomes using the equality operators <code>==</code> and <code>!=</code>. The delighted parents would like to extend your contract to Generation 2. Are you ready? If so, hit Enter to continue.</div>'});
}
{
  var levels = [];
  levels.push({configuration: '0001000000000100000000010000000001000000111111111100010000000001000000000100000000010000000001000000', message: 'If the desired brood is the union of several expressions, combine the expressions using <code>OR</code>. For example, <code>x == 3 OR y == 4</code> breeds the kids with either an <code>x</code> chromosome of 3 or a <code>y</code> chromosome of 4.'});
  levels.push({configuration: '0000000000000000000000000000000000001111000000111100000011110000001111000000111100000011110000001111', message: 'If the desired brood is the intersection of several expressions, combine the expressions using <code>AND</code>. For example, <code>x > 5 AND y >= 3</code> causes only the kids whose <code>x</code> is greater than 5 and whose <code>y</code> chromosome is greater than or equal to 3 to be born.'});
  levels.push({configuration: '1111110011111111001111111100111111110011111111001111111100111111110011111111001111111111111111111111', message: 'Guess what? You can combine more than two expressions! Try using three expressions combined with two <code>OR</code>s for this one.'});
  levels.push({configuration: '1100000011000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000', message: 'When you do combine more than two expressions, watch out for the differing precedence of <code>AND</code> and <code>OR</code>. Operator <code>AND</code> has higher precedence than <code>OR</code>. Add parentheses to <code>x < 2 OR x > 7 AND y == 0</code> to alter the precedence of the <code>OR</code>.'});
  levels.push({configuration: '1111111111011111111101111111110111111111011111111101111111110111111111011111111101111111110111111111', message: 'Sometimes it\'s easier to express the opposite of the desired chromosomes. Enter <code>x == 0 AND y > 0</code> in the box. This litter is the exact opposite of what you want. Flip the logic by negating the <i>entire</i> expression with the NOT operator: <code>NOT(x == 0 && y > 0)</code>.'});
  worlds.push({levels: levels, message: '<div class="levelcomplete"><h3>Generation Complete</h3>You\'ve expressed all the litters of Generation 2! Your gene therapy skills allow you to express chromosomes using the logical operators <code>AND</code>, <code>OR</code>, and <code>NOT</code>. Mom <code>AND</code> Dad love what your doing, and they want you back next season. Are you ready? If so, hit Enter to continue.</div>'});
}
{
  var levels = [];
  levels.push({configuration: '0000000000000000000000000000000000000000000000000000000000001111100000111110000011111000001111100000'});
  levels.push({configuration: '0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000'});
  levels.push({configuration: '0000110000000011000000001100000000110000111111111111111111111111111111111111111111111111111111111111'});
  levels.push({configuration: '0000000000000000000000000000000001111000000111100000011110000001111000000000000000000000000000000000'});
  levels.push({configuration: '1100000000110000000011000000001100000000110000000011000000001100000000110000000011111111111111111111'});
  levels.push({configuration: '1110000000000000000011100000001110000000111000000011100000001110000000111000000011100000001110000000'});
  levels.push({configuration: '0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000', message: 'The parents are tired. Give them a litter off with the expression <code>FALSE</code>.'});
  levels.push({configuration: '1010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010'});
  levels.push({configuration: '1000000000010000000000100000000001000000000010000000000100000000001000000000010000000000100000000001'});
  levels.push({configuration: '0111111111001111111100011111110000111111000001111100000011110000000111000000001100000000010000000000'});
  levels.push({configuration: '1000000000100000000010000000001111111100111111110011111111001111111100111111110011111111001000000000'});
  levels.push({configuration: '1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111'});
  levels.push({configuration: '0000000000000000000011111111110000000000000000000011111111110000000000000000000011111111110000000000'});
  levels.push({configuration: '1111111111111111111111111111111111111111111111111111111111111111111111000000000011111111111111111111'});
  levels.push({configuration: '1111111111111111111111111111111111111111111111111111111101111111111111111111111111111111111111111111'});
  levels.push({configuration: '1111111110111111110011111110001111110000111110000011110000001110000000110000000010000000001111111111'});
  levels.push({configuration: '0111111111101111111111011111111110111111111101111111111011111111110111111111101111111111011111111110'});
  levels.push({configuration: '0100000000101000000001010000000010100000000101000000001010000000010100000000101000000001010000000010'});
  levels.push({configuration: '1101111111000000000011011111111101111111110111111111011111111101111111110111111111011111111101111111'});
  levels.push({configuration: '0101010101000000000001010101010101010101010101010100000000000101010101010101010101010101010000000000'});
  worlds.push({levels: levels, message: '<div class="levelcomplete"><h3>Generation Complete</h3>You\'ve expressed all the litters of Generation 3! This game seems to be your BRED and butter! But biological clocks are ticking, and Mom and Dad have a list of designer children they need your help with. If you\'re ready to make them happen, hit Enter to continue.</div>'});
}
{
  var levels = [];
  levels.push({configuration: '1000000001000000000000000000000000000000000000000000000000000000000000000000000000000000001000000001'});
  levels.push({configuration: '0001000000000100000000010000000001000000000100000000010000000000000000000100000000010000000001000000'});
  levels.push({configuration: '0000000000000000000010001000100100010001001000100000010001000000000000000000000000000000000000000000'});
  levels.push({configuration: '1111110000111111000011111100001111110000000111000000011100000001110000000000000000000000000000000000'});
  levels.push({configuration: '1111111111111111111111111111111111111111111111111111001100111100110011000000000000000000000000000000'});
  levels.push({configuration: '0000000000000000000000000000001111100000111110000011111000000000000000111110000011111000000000000000'});
  levels.push({configuration: '0000000000000000000000000000000000000000000000100000000100000000100000000100000000100000000100000000'});
  levels.push({configuration: '1000000001100000000110000000011000000001100000000110000000011000000001100000000110000000011111111111'});
  levels.push({configuration: '0100000010000000001001000000100100000010010000001001000000100100000010010000001011111111010100000010'});
  levels.push({configuration: '0000000000000000000000000000001111111000111111110011111111101111111111111111111111111111111111111111'});
  levels.push({configuration: '0000000000000000000011111100001111110000111111000011111100001111100000000000000000000000000000000000'});
  levels.push({configuration: '1100110011110011001111001100111100110011110011001100000000000011001100001100110000110011000011001100'});
  levels.push({configuration: '1100000000110000000011000000001100000000110000000011000000001100000000110000000001000000001100000000'});
  levels.push({configuration: '0100000000010000000001000000000100000000010000000001000000000100000000001000000000010000000000100000'});
  levels.push({configuration: '0000011110000000110000000111100000011110000001111000000111100000011110000001111000000111100000011110'});
  levels.push({configuration: '0000000000000000000000000000001000000000110000000011100000001111000000011110000000111100000001111000'});
  levels.push({configuration: '0000000000000010000011110000001111000000111100000011110000001111000000000010000000000000000000000000'});
  levels.push({configuration: '0000111100000111100000111100000111100000000000000000000000000000000000000000000000000000000000000000'});
  levels.push({configuration: '1000000001010000001000100001000001001000000011000000001100000000000000000000000000000000000000000000'});
  levels.push({configuration: '1110000111111000011111100001111111111111111111111111111111111111111111111000011111100001111110000111'});
  worlds.push({levels: levels, message: '<div class="levelcomplete"><h3>Generation Complete</h3>You\'ve expressed all the litters of Generation 4! Are you ready to help the litters of the next generation be born? Mom and Dad are getting the hang of parenting and are looking to have some stranger litters. These won\'t require any new operators, but some deeper thinking. If you\'re ready, hit Enter to continue.</div>'});
}
{
  var levels = [];
  levels.push({configuration: '1000000010010000010100100010100001010100000010100000010100000010101000010100010010100000100100000001'});
  levels.push({configuration: '1010101010010101010110101010100101010101101010101001010101011010101010010101010110101010100101010101'});
  levels.push({configuration: '1111111111100100100110010010011111111111100100100110010010011111111111100100100110010010011111111111'});
  levels.push({configuration: '0000000000010101010100000000000101010101000000000001010101010000000000010101010100000000000101010101'});
  levels.push({configuration: '1000000000110000000011000000001100000000111000000011100000001110000000111000000011100000001111000000'});
  levels.push({configuration: '1110000000011100000000111000000001110000000011100000000111000000001110000000011100000000110000000001'});
  levels.push({configuration: '0000001100000000110000000011000000001100000000110000000011000000001100000000110011111111111111111111'});
  levels.push({configuration: '0000111111000111111100111111110111111111111111111111111111111111111111111111111111111111111111111111'});
  levels.push({configuration: '0000011111100001111111000111111110011111111101111111111011111111100111111110001111111000011111100000'});
  levels.push({configuration: '1111111111011101110100110011000001000100000000000000000000000000000000000000000000000000000000000000'});
  levels.push({configuration: '1111111111111111111111111111111111111100000000000000000000000000000000000000000000000000000000000000'});
  levels.push({configuration: '0100000000100000000001000000001000000000010000000010000000000100000000100000000001000000001000000000'});
  levels.push({configuration: '1000000000100000000001000000000100000000001000000000100000000001000000000100000000001000000000100000'});
  levels.push({configuration: '0111111111000111111100000111110000000111000000000100000000000000000000000000000000000000000000000000'});
  levels.push({configuration: '1111111111111111111111100000000000000000000000000000000000000000000000000000001111111111111111111111'});
  levels.push({configuration: '1111111000111111100011111110001111110000111111000011111100001111110000111111000011111100001111110000'});
  levels.push({configuration: '0101010101111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111'});
  levels.push({configuration: '0111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111'});
  levels.push({configuration: '1111111111111111111111111111110000111111111111111111111111111111111111111111111111111111111111111111'});
  levels.push({configuration: '1111111111100000000110000000011000000001100000000110000000011000000001100000000110000000011111111111'});
  worlds.push({levels: levels, message: '<div class="levelcomplete"><h3>Generation Complete</h3>Generation 5 is alive and kicking! Are you ready for Generation 6? For these litters, you\'ll need some advanced tools of the trade, like bitwise operators and the functions <code>abs</code>, <code>min</code>, and <code>max</code>. Expect frustration and difficulty! If you\'re ready, hit Enter to continue.</div>'});
}
{
  var levels = [];
  levels.push({configuration: '0000000000001001001001001001000000000000001001001001001001000000000000001001001001001001000000000000'});
  levels.push({configuration: '1100000001110000000100000000000000000000000000000000000000000000000000000000000000000000001100000001', message: 'Use the absolute value function <code>abs</code> to solve this one!'});
  levels.push({configuration: '1111100000111111000011111110001111111100111111111001111111110011111111000111111100001111110000011111'});
  levels.push({configuration: '0001000100001000100001000100011000100010000100010000100010000100010001100010001000010001000010001000'});
  levels.push({configuration: '1111111111100010001010101010101000100010111111111110001000101010101010100010001011111111111000100010'});
  levels.push({configuration: '0011001100001100110000110011000011001100001100110000110011000011001100001100110000110011000011001100', message: 'Use bitwise <code>&</code> to solve this one!'});
  levels.push({configuration: '1000000000000000000000100000000001000000000000000000000100000000001000000000000000000000100000000001'});
  levels.push({configuration: '1010101010010101010100000000000000000000101010101001010101010000000000000000000010101010100101010101'});
  levels.push({configuration: '0000000111000000111100000101110000111111000100011100110011110101010111111111111111111111111111111111'});
  levels.push({configuration: '1111111111010101010100110011000001000100000011110000000101000000001100000000010000000000110000000001'});
  levels.push({configuration: '0001000000001000000001000000001000000000000000010000000010000000010000000010000000000000000000000000'});
  levels.push({configuration: '1100110011000000000000110011000000000000110011001100000000000011001100000000000011001100110000000000'});
  levels.push({configuration: '1110000000110000000010000000000000000001000000001100000001110000001111000001111100001111110001111111'});
  levels.push({configuration: '0000000000001100000000000000000011000000000000000000000011000000000000000000110000000000000000000000'});
  levels.push({configuration: '0000111100000011110000001111000000111100111100001111110000111111000011111100001100001111000000111100'});
  levels.push({configuration: '0010010010001001001011100100100000010010000001001011111100100000000010000000001011111111100000000000', message: 'Hey! <code>max(a, b)</code> evaluates to the bigger of <code>a</code> and <code>b</code>. Just thought you might like to know.'});
  levels.push({configuration: '0011001100001100110011001100111100110011001100110000110011001100110011110011001100110011000011001100'});
  levels.push({configuration: '0111011101101110111011011101111110111011011101110110111011101101110111111011101101110111011011101110'});
  levels.push({configuration: '0000111100001111000011110000111100001111000011110000111100001111000011110000111100001111000011110000'});
  levels.push({configuration: '0000000000000000000000000000000000000111000000111100000011110000110001000111000100011100010001111110'});
  levels.push({configuration: '1111111111100000000010111111101010000010101011101010101010101010111010101000001010111111101000000000'});
  worlds.push({levels: levels, message: '<div class="levelcomplete"><h3>Generation Complete</h3>Mom and Dad have decided enough is enough. No more kids. Your years of employment have come to an end. But good news! You have been allotted a share in their will, which when distributed amongst all their children and you, works out to about 1/1000000th of their estate.</div>'});
}
