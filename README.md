# [Typescript](https://github.com/Microsoft/TypeScript) [Tape](https://github.com/substack/tape) [Nyc](https://github.com/istanbuljs/nyc) example project

An example project illustrating a method of using these tools together.

## Running

```sh
$ npm install
...
$ npm test
```

## Output

[See here](https://benwhite-deltas.github.io/typescript-tape-nyc-example/) for pretty HTML output as generated by nyc,
or see the output as shown on the console below: 

```
> typescript-tape-example@0.1.0 test /home/benjamin/projects/pnavigator
> nyc --reporter=lcov --require ts-node/register tape tests/**/*-test.{ts,js} | tap-spec; nyc report ---reporter=text


  Widget

    ✔ should take a multiplicand in its constructor
    ✔ should take a multiplier in the multiply() method
    ✔ and should multiply the multipler and multiplicand together


  total:     3
  passing:   3
  duration:  1.3s


-----------|----------|----------|----------|----------|----------------|
File       |  % Stmts | % Branch |  % Funcs |  % Lines |Uncovered Lines |
-----------|----------|----------|----------|----------|----------------|
All files  |      100 |      100 |      100 |      100 |                |
 widget.ts |      100 |      100 |      100 |      100 |                |
-----------|----------|----------|----------|----------|----------------|
```
