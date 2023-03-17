export default {
  C : (tagName,Attri,target,Text) => {
    const C_tag = document.createElement(tagName);
    if (Attri) {
      for (let p in Attri) {
        C_tag.setAttribute(p,Attri[p]);
      }
    }
    target.appendChild(C_tag);
    if (Text) {
      C_tag.innerText = Text;
    }
  },
  test : function () {
    console.log(this.C);
  }
}