# Prop Drilling (permet de découpé les composants en de tout petit composant)

1.
Le Prop Drilling, également appelé "lifting state up" en React, est un modèle de gestion de l'état dans une application React où les données (ou l'état) sont transmises de composant parent à composant enfant via les props. Cela peut être nécessaire lorsque plusieurs composants ont besoin d'accéder ou de modifier la même donnée.

Imaginons une hiérarchie de composants dans laquelle un composant A détient l'état (ou les données) et a besoin de transmettre cette information à un composant B, qui à son tour doit la passer à un composant C. Plutôt que de transmettre directement l'information de A à C, on la transmet via les props de B. Cela crée un "tunnel" à travers lequel les données sont transmises, et c'est ce qu'on appelle le Prop Drilling.

Voici un exemple simple pour illustrer cela :

```bash
// Composant A
const ParentComponent = () => {
  const [data, setData] = useState("Donnée initiale");

  return (
    <ChildComponentB data={data} setData={setData} />
  );
};

// Composant B
const ChildComponentB = ({ data, setData }) => {
  // ... peut faire quelque chose avec data ...

  return (
    <GrandchildComponentC data={data} setData={setData} />
  );
};

// Composant C
const GrandchildComponentC = ({ data, setData }) => {
  // ... peut faire quelque chose avec data ...

  return (
    // ...
  );
};

```

Dans cet exemple, ParentComponent détient l'état data et le passe au ChildComponentB via la prop data. Ensuite, ChildComponentB transmet cette donnée à GrandchildComponentC. Les fonctions de mise à jour, comme setData, sont également transmises de composant en composant pour permettre les modifications de l'état.

Bien que le Prop Drilling puisse être simple à mettre en œuvre, il peut devenir problématique dans les applications complexes où de nombreux composants intermédiaires doivent transmettre les mêmes données. Cela peut rendre le code difficile à maintenir et à comprendre. Dans de tels cas, des solutions telles que le contexte React ou la gestion de l'état avec Redux peuvent être envisagées pour simplifier le partage d'état entre les composants sans nécessiter le Prop Drilling.