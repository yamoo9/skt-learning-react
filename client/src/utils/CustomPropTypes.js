export const string = (props, propName, componentName) => {
  const value = props[propName];
  const valueType = typeof value;
  if (valueType !== 'string') {
    throw new Error(
      `${componentName} 컴포넌트에 전달된 ${propName} prop에 요구되는 데이터 타입은 'string'이나, 전달된 데이터 타입은 '${valueType}' 입니다.`
    );
  }
};

const PropTypes = {
  string,
};

export default PropTypes;
