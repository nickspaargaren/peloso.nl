terraform {
  required_providers {
    cloudflare = {
      source  = "cloudflare/cloudflare"
      version = "~> 5"
    }
  }
}

provider "cloudflare" {
  # API token will be read from CLOUDFLARE_API_TOKEN environment variable
}

variable "zone_id" {
  description = "Cloudflare Zone ID"
  type        = string
  sensitive   = true
}

variable "account_id" {
  description = "Cloudflare Account ID"
  type        = string
  sensitive   = true
}

variable "domain" {
  description = "Domain name"
  type        = string
  default     = "peloso.nl"
}

resource "cloudflare_dns_record" "root" {
  zone_id = var.zone_id
  name    = "@"
  content = "76.76.21.21"
  type    = "A"
  ttl     = 1
  proxied = true
  comment = "Root domain A record"
}

resource "cloudflare_dns_record" "www" {
  zone_id = var.zone_id
  name    = "www"
  content = "76.76.21.21"
  type    = "A"
  ttl     = 1
  proxied = true
  comment = "WWW subdomain A record"
}

resource "cloudflare_dns_record" "google_verification" {
  zone_id = var.zone_id
  name    = "@"
  content = "\"google-site-verification=I5NJq9iOohyA9P4ZOJS6tukNc71nFByztWCxK3OdCCI\""
  type    = "TXT"
  ttl     = 1
  comment = "Google site verification"
}
