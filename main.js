// Function to create a button element
function createButton(className, text, iconClass) {
    const button = document.createElement('button');
    button.className = className;
    if (iconClass) {
      const icon = document.createElement('i');
      icon.className = iconClass;
      button.appendChild(icon);
    }
    button.appendChild(document.createTextNode(text));
    return button;
  }
  
  // Function to build the login form dynamically
  function renderLoginForm() {
    const app = document.getElementById('app');
  
    const pageHeader = document.createElement('div');
    pageHeader.className = 'page-header';
    pageHeader.innerHTML = `
      <h1>Happening now</h1>
      <h2>Join Today.</h2>
    `;
    app.appendChild(pageHeader);
  
    // Create and add buttons
    app.appendChild(createButton('sign-up-google', 'Sign up with Google', 'fab fa-google'));
    app.appendChild(createButton('sign-up-apple', 'Sign up with Apple', 'fab fa-apple'));
    app.appendChild(document.createTextNode('or'));
    app.appendChild(createButton('create-account', 'Create an account'));
  
    // Add terms and privacy text
    const termsText = document.createElement('p');
    termsText.className = 'terms-text';
    termsText.innerHTML = `
      By signing up, you agree to the <a href="#">Terms of Service</a> and 
      <a href="#">Privacy Policy</a>, including <a href="#">Cookie Use</a>.
    `;
    app.appendChild(termsText);
  
    // Add sign-in link
    const signIn = document.createElement('p');
    signIn.className = 'sign-in';
    signIn.innerHTML = 'Already have an account? <a href="#" class="sign-in-link">Sign in</a>';
    app.appendChild(signIn);
  }
  
  // Function to create footer links
  function renderFooter() {
    const footerLinks = [
      'About', 'Download the X app', 'Help Center', 'Terms of Service',
      'Privacy Policy', 'Cookie Policy', 'Accessibility', 'Ads info',
      'Blog', 'Careers', 'Brand Resources', 'Advertising', 'Marketing',
      'X for Business', 'Developers', 'Directory', 'Settings'
    ];
  
    const footer = document.getElementById('footer-links');
    footerLinks.forEach(link => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = '#';
      a.textContent = link;
      li.appendChild(a);
      footer.appendChild(li);
    });
  }
  
  // Initialize the page
  document.addEventListener('DOMContentLoaded', () => {
    renderLoginForm();
    renderFooter();
  });
  