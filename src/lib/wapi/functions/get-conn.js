export function getConn() {
  return typeof (Store.Conn.all) != 'undefined' ? Store.Conn.all : Store.Conn.attributes;
}