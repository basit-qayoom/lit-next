export default function Home() {
  return (
    <>
      <h1>Lit - NextJS</h1>
      <hr />
      <h1>Calling SHADOW DOM: Disabled Component</h1>
      <pw-card cardTitle="Lit Card Title" link="https://www.google.com"></pw-card>
      <hr />
      <h3>Calling SHADOW DOM: Enabled Component</h3>
      <my-app></my-app>
      <hr />
      <h3>Calling Component one by one</h3>
      <my-element></my-element>
      <pw-button>PW Button</pw-button>
      <name-tag></name-tag>
      <my-form></my-form>
    </>
  );
}
