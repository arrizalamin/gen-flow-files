// @flow
type TitleType = {
  title: 'Mr' | 'Ms' | 'Dr'
};
declare class TestClass {
  static TestClassFunc(title: TitleType): any
}
