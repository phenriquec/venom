export function getStream() {
  return typeof (Store.Stream.all) != 'undefined' ? Store.Stream.all : Store.Stream.attributes;
}