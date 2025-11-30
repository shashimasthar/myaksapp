variable "resource_group_name" {
  default = "aks-demo-rg"
}

variable "location" {
  default = "West US 2"
}

variable "acr_name" {
  description = "Must be globally unique"
  default     = "aksdemoacr12345" # User should change this or we make it random
}

variable "aks_name" {
  default = "aks-demo-cluster"
}
