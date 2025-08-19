# === Rebuild Infralight site (ASCII-safe, no here-strings for HTML) ===
$root = "infralight"

# Helpers
function Write-Lines($path, [string[]]$lines) {
  $dir = Split-Path $path
  if ($dir -and -not (Test-Path $dir)) { New-Item -ItemType Directory -Path $dir -Force | Out-Null }
  $content = [string]::Join("`r`n", $lines)
  Set-Content -Path $path -Value $content -Encoding UTF8
}
function Write-Text($path, [string]$text) {
  $dir = Split-Path $path
  if ($dir -and -not (Test-Path $dir)) { New-Item -ItemType Directory -Path $dir -Force | Out-Null }
  Set-Content -Path $path -Value $text -Encoding UTF8
}
function Write-BinaryFromBase64($path, $b64) {
  $dir = Split-Path $path
  if ($dir -and -not (Test-Path $dir)) { New-Item -ItemType Directory -Path $dir -Force | Out-Null }
  [IO.File]::WriteAllBytes($path, [Convert]::FromBase64String($b64)) | Out-Null
}

# Folders
$folders = @("$root", "$root/assets/logo", "$root/assets/illustrations")
$folders | ForEach-Object { New-Item -ItemType Directory -Path $_ -Force | Out-Null }

# Common head/body parts (ASCII only)
$Head = @(
  '<!DOCTYPE html>',
  '<html lang="en">',
  '<head>',
  '  <meta charset="UTF-8" />',
  '  <meta name="viewport" content="width=device-width, initial-scale=1.0" />',
  '  <title>{TITLE}</title>',
  '  <link rel="icon" type="image/svg+xml" href="favicon.svg">',
  '  <link rel="manifest" href="manifest.webmanifest" />',
  '  <link rel="stylesheet" href="styles.css?v=20240818-5">',
  '  <script defer src="app.js"></script>',
  '</head>',
  '<body>',
  '<a class="skip-link" href="#main">Skip to content</a>'
)
$Header = @(
  '<header class="site-header">',
  '  <div class="container header-inner">',
  '    <a href="index.html" class="brand">',
  '      <img src="assets/logo/infralight-bulb-transparent.png" alt="Infralight" />',
  '    </a>',
  '    <button class="nav-toggle" id="navToggle" aria-label="Toggle navigation" aria-expanded="false">',
  '      <span class="nav-toggle-bar"></span><span class="nav-toggle-bar"></span><span class="nav-toggle-bar"></span>',
  '    </button>',
  '    <nav id="nav" class="site-nav" aria-label="Primary">',
  '      <a href="index.html">Home</a>',
  '      <a href="services.html">Services</a>',
  '      <a href="case-studies.html">Case Studies</a>',
  '      <a href="about.html">About</a>',
  '      <a href="contact.html">Contact</a>',
  '    </nav>',
  '  </div>',
  '</header>'
)
$Footer = @(
  '<footer class="site-footer">',
  '  <div class="container footer-grid">',
  '    <div>',
  '      <img src="assets/logo/infralight-logo.transparent.png" alt="Infralight" />',
  '      <p class="tiny muted">© 2025 Infralight. All rights reserved.</p>',
  '    </div>',
  '    <nav class="footer-nav">',
  '      <a href="index.html">Home</a>',
  '      <a href="services.html">Services</a>',
  '      <a href="case-studies.html">Case Studies</a>',
  '      <a href="about.html">About</a>',
  '      <a href="contact.html">Contact</a>',
  '      <a href="privacy.html">Privacy</a>',
  '    </nav>',
  '  </div>',
  '</footer>',
  '</body>',
  '</html>'
)

# Fixed MakePage function
function MakePage($title, [string[]]$main) {
  $head = $Head | ForEach-Object { $_.Replace("{TITLE}", $title) }
  $head + $Header + @('<main id="main">') + $main + @('</main>') + $Footer
}

# Page bodies
$home = @(
  '<section class="section hero">',
  '  <div class="container grid-2">',
  '    <div>',
  '      <h1>Infrastructure, Cloud and FinOps Consulting</h1>',
  '      <p class="lead">We help businesses optimise their IT infrastructure and cloud costs with expert guidance.</p>',
  '      <div class="actions">',
  '        <a href="services.html" class="btn btn-primary">Explore Services</a>',
  '        <a href="contact.html" class="btn btn-ghost">Contact Us</a>',
  '      </div>',
  '    </div>',
  '    <div class="hero-art"><img src="assets/illustrations/cloud-infra.svg" alt="Cloud Infrastructure Illustration" /></div>',
  '  </div>',
  '</section>',
  '<section class="section">',
  '  <div class="container cards">',
  '    <a class="card" href="infrastructure.html"><h2>Infrastructure</h2><p>Resilient, secure, and scalable foundations for critical workloads.</p></a>',
  '    <a class="card" href="cloud.html"><h2>Cloud</h2><p>Migration, platform engineering, governance, and CI/CD.</p></a>',
  '    <a class="card" href="finops.html"><h2>FinOps</h2><p>Cost visibility, rightsizing, commitments, and anomaly detection.</p></a>',
  '  </div>',
  '</section>'
)

# Services, Infra, Cloud, FinOps, Case studies, About, Contact, Privacy, Thanks, 404
$services = @('<section class="section"><div class="container"><h1>Services</h1><p class="lead">Pragmatic consulting across infrastructure, cloud, and FinOps.</p></div></section>')
$infra    = @('<section class="section"><div class="container"><h1>Infrastructure Services</h1><p class="lead">Resilient, secure-by-default foundations for critical workloads.</p></div></section>')
$cloud    = @('<section class="section"><div class="container"><h1>Cloud Services</h1><p class="lead">Accelerate your journey on AWS, Azure, and GCP.</p></div></section>')
$finops   = @('<section class="section"><div class="container"><h1>FinOps</h1><p class="lead">Get visibility and control over cloud spend without surprises.</p></div></section>')
$cases    = @('<section class="section"><div class="container"><h1>Case Studies</h1><p>Success stories from our clients.</p></div></section>')
$about    = @('<section class="section"><div class="container"><h1>About Infralight</h1><p>Engineers and advisors bringing practical patterns and measurable outcomes.</p></div></section>')
$contact  = @('<section class="section"><div class="container"><h1>Contact Us</h1><p>Email: <a href="mailto:info@infralight.co.uk">info@infralight.co.uk</a></p><form action="https://formspree.io/f/myzpaeln" method="POST"><label>Name<input type="text" name="name" required></label><label>Email<input type="email" name="email" required></label><label>Message<textarea name="message" required></textarea></label><button type="submit">Send</button></form></div></section>')
$privacy  = @('<section class="section"><div class="container"><h1>Privacy Policy</h1><p>We respect your privacy and collect only what we need.</p></div></section>')
$thanks   = @('<section class="section"><div class="container"><h1>Thank You</h1><p>Your message has been sent.</p></div></section>')
$notfound = @('<section class="section"><div class="container"><h1>404 — Page not found</h1><p>Try the home page.</p></div></section>')

# Write pages
Write-Lines "$root/index.html"          (MakePage "Infralight - IT Consulting and Cloud Services" $home)
Write-Lines "$root/services.html"       (MakePage "Services - Infralight" $services)
Write-Lines "$root/infrastructure.html" (MakePage "Infrastructure Services - Infralight" $infra)
Write-Lines "$root/cloud.html"          (MakePage "Cloud Services - Infralight" $cloud)
Write-Lines "$root/finops.html"         (MakePage "FinOps - Infralight" $finops)
Write-Lines "$root/case-studies.html"   (MakePage "Case Studies - Infralight" $cases)
Write-Lines "$root/about.html"          (MakePage "About - Infralight" $about)
Write-Lines "$root/contact.html"        (MakePage "Contact - Infralight" $contact)
Write-Lines "$root/privacy.html"        (MakePage "Privacy Policy - Infralight" $privacy)
Write-Lines "$root/thanks.html"         (MakePage "Thank You - Infralight" $thanks)
Write-Lines "$root/404.html"            (MakePage "404 - Page Not Found" $notfound)

# CSS
Write-Text "$root/styles.css" "body{font-family:system-ui;background:#0A0F1C;color:#F5F7FA}..."

# JS
Write-Text "$root/app.js" "document.addEventListener('DOMContentLoaded',()=>{...});"

# Icons / SEO
Write-Text "$root/favicon.svg" "<svg xmlns='http://www.w3.org/2000/svg'></svg>"
Write-Text "$root/manifest.webmanifest" "{ 'name':'Infralight','short_name':'Infralight'}"
Write-Text "$root/robots.txt" "User-agent: *`r`nAllow: /"
Write-Text "$root/CNAME" "infralight.co.uk"
Write-Text "$root/.nojekyll" "# Prevent Jekyll"
Write-Text "$root/README.md" "# Infralight Website`nStatic site."

# Placeholders
$png1x1 = "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg=="
Write-BinaryFromBase64 "$root/assets/logo/infralight-bulb-transparent.png" $png1x1
Write-BinaryFromBase64 "$root/assets/logo/infralight-logo.transparent.png" $png1x1
Write-Text "$root/assets/illustrations/cloud-infra.svg" "<svg xmlns='http://www.w3.org/2000/svg'></svg>"
Write-Text "$root/assets/illustrations/team.svg" "<svg xmlns='http://www.w3.org/2000/svg'></svg>"

# Zip
if (Test-Path ".\infralight.zip") { Remove-Item ".\infralight.zip" -Force }
Compress-Archive -Path "$root\*" -DestinationPath ".\infralight.zip" -Force

Write-Host "Done. Created '$root' and 'infralight.zip'." -ForegroundColor Green
