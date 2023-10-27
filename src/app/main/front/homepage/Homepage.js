/* eslint-disable prettier/prettier */
import { useEffect } from 'react';
import './Homepage.css';
import Layout from '../components/Layout/Layout';

export default function Homepage() {
  // notes Boostrap CDN Call
  useEffect(() => {
    const link = document.createElement('link');
    link.href =
      'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css';
    link.rel = 'stylesheet';
    link.integrity =
      'sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ';
    link.crossOrigin = 'anonymous';

    const script = document.createElement('script');
    script.src =
      'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js';
    script.integrity =
      'sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe';
    script.crossOrigin = 'anonymous';
    script.async = true;
    document.body.appendChild(script);
    document.body.appendChild(link);
    return () => {
      document.body.removeChild(script);
      document.body.removeChild(link);
    };
  }, []);

  return (
    <Layout>
      <h1>boostrap headings</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. At amet fugit
        corrupti nulla nam quasi unde soluta dolore quo itaque. Reiciendis illum
        provident totam est odit quos nobis odio aliquid. Assumenda amet
        pariatur natus totam, perferendis voluptate quae excepturi incidunt!
        Officiis incidunt animi minus odit soluta iste deleniti error enim
        autem! Sequi beatae deserunt cupiditate minus iusto ut natus
        exercitationem! Dolorum vel cupiditate id tempora velit et, obcaecati
        minus, molestiae, tempore facere quaerat autem voluptates quisquam porro
        totam quam. Totam iste eos placeat similique cum assumenda ipsa velit
        laudantium porro! Incidunt illum, doloremque commodi accusamus deleniti
        fuga vero! Enim, consequatur recusandae sed ratione deleniti, quos earum
        dolorum praesentium sapiente non harum. Aliquam ducimus iusto quod
        corporis nobis sed sunt fugiat! Unde minima quis pariatur sint, soluta a
        harum, provident praesentium ea reprehenderit facere molestiae. Nemo
        beatae, aliquam molestias minus ad, voluptate dolorem repellat eos
        ratione in facilis modi, consequatur iure.
      </p>
    </Layout>
  );
}
