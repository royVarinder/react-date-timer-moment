### About Package

The react-date-timer-moment NPM package is a lightweight and easy-to-use solution for adding real-time date and time functionality to your web applications. With a simple integration, you can showcase the current date and time to your users, dynamically updating without the need for page refreshes. Customize the display format, time zones, and styling effortlessly, providing a seamless and informative experience. Enhance your user interfaces with this package to keep your audience informed and engaged with accurate, live date and time information.

### Install

```bash
npm install react-date-timer-moment --save
```


### how to use

```jsx
import React from "react";
import DateTimer from 'react-date-timer-moment';

class Example extends Component {
  render() {
    return <DateTimer dateTimeFormat="ddd, DD-MM-YY hh:mm:ss A" className="testClass" timeZone="America/Vancouver" />;
  }
}
```

### Properties

| Property          | Type   | Required | Default value    | Description                                        |
| :-------          | :----- | :------- | :------------    | :----------------------------                      |
| `dateTimeFormat`  | string | yes      |                  | Format of time zone to display                     |
| `className`       | string | no       |                  | Additional style classes                           |
| `timeZone`        | string | no       | System time zone | Show time according to zone e.g. America/New_York |


### Contribute

Feel free to send PR and any suggestions. Thanks
