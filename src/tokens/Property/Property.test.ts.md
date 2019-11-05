# Snapshot report for `src/tokens/Property/Property.test.ts`

The actual snapshot is saved in `Property.test.ts.snap`.

Generated by [AVA](https://ava.li).

## pretty() snapshot

> Snapshot 1

    `NAME = VALUE␊
    `

## snapshot

> Snapshot 1

    Property {
      name: PropertyName {
        raws: {
          after: '__AFTER_NAME',
          before: 'BEFORE_NAME__',
        },
        type: 'PropertyName',
        value: 'NAME',
      },
      newline: Newline {
        type: 'Newline',
        value: `␊
        `,
      },
      type: 'Property',
      value: PropertyValue {
        raws: {
          after: '__AFTER_VALUE',
          before: 'BEFORE_VALUE__',
        },
        type: 'PropertyValue',
        value: 'VALUE',
      },
    }

## toString() snapshot

> Snapshot 1

    `BEFORE_NAME__NAME__AFTER_NAME=BEFORE_VALUE__VALUE__AFTER_VALUE␊
    `