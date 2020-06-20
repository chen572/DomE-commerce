const moveToAboutUs = () => {
    const container = document.getElementById('content-container');
    const aboutUsContainer = document.createElement('div');
    aboutUsContainer.id = 'content-container';
    
    const header = document.createElement('h1');
    header.id = 'header';
    header.innerHTML = 'About Us'

    const paraContainer = document.createElement('div');
    paraContainer.id = 'about-para';

    const para1 = document.createElement('p');
    para1.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porttitor sagittis luctus. Donec faucibus bibendum tortor, maximus facilisis orci pellentesque quis. Praesent lacus ex, porta vitae dictum sed, vestibulum sit amet felis. Nulla dui massa, posuere condimentum viverra eget, congue non velit. Morbi id est ut nibh ullamcorper dictum a a elit. Praesent pharetra nec justo in aliquam. Vivamus ac arcu quam. Nam ut odio malesuada, interdum libero quis, sodales libero. Suspendisse auctor risus ligula, a cursus tortor consectetur sit amet. Maecenas cursus felis eget sapien condimentum, vitae consectetur quam tincidunt. In sed semper arcu, ut pulvinar massa. Etiam vulputate et diam vitae elementum. Suspendisse quis eros sagittis, volutpat diam a, bibendum orci. Aliquam erat volutpat. Ut in neque ullamcorper, euismod arcu posuere, efficitur mauris. Integer quis risus elementum, pretium justo at, ultricies lectus.';

    const para2 = document.createElement('p');
    para2.innerHTML = 'Sed vitae odio interdum, viverra turpis quis, pharetra lacus. Pellentesque at cursus velit, eget posuere nisi. In sed auctor diam. Pellentesque metus diam, imperdiet ac dolor in, placerat malesuada justo. Phasellus augue lectus, aliquam sed lectus id, volutpat sollicitudin ex. Etiam maximus, enim a congue pulvinar, magna turpis egestas dolor, nec tempus arcu lacus at mi. Phasellus vitae egestas leo. Vestibulum at sem at odio laoreet volutpat id in eros.';

    const para3 = document.createElement('p');
    para3.innerHTML = 'Maecenas ipsum felis, tempor eget volutpat a, sodales a dolor. Nulla vitae nunc imperdiet, dictum mi ut, pulvinar mauris. Donec congue libero at nibh viverra, non pharetra nibh fringilla. Cras ut tempus sem. Nulla ultrices neque eget rhoncus iaculis. Pellentesque sit amet congue nunc. Aliquam maximus enim et nibh ultricies vehicula. Nam nec lacus blandit, porta nunc quis, tincidunt est. Aliquam ligula erat, finibus ac nisl id, molestie aliquet sem. Ut efficitur enim tortor, sed scelerisque mauris facilisis non. Integer faucibus nisi dui, id ultricies justo pulvinar cursus. Nam non dictum nibh. Sed lectus felis, mollis eget hendrerit et, fringilla non dui.';

    paraContainer.appendChild(para1);
    paraContainer.appendChild(para2);
    paraContainer.appendChild(para3);

    aboutUsContainer.appendChild(header);
    aboutUsContainer.appendChild(paraContainer);

    document.body.removeChild(container);
    document.body.appendChild(aboutUsContainer);
};